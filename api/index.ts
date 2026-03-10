import express, { type Request, Response, NextFunction } from "express";
import path from "path";
import fs from "fs";
import { google } from "googleapis";

async function appendToSheet(data: { naam: string; email: string; telefoon?: string; bericht: string }) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const timestamp = new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    range: "Fatfinger!A:E",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[timestamp, data.naam, data.email, data.telefoon ?? "", data.bericht]],
    },
  });
}

const app = express();

app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));

// Add logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const reqPath = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (reqPath.startsWith("/api")) {
      let logLine = `${req.method} ${reqPath} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      console.log(logLine);
    }
  });

  next();
});

app.post("/api/contact", async (req, res) => {
  const { naam, email, telefoon, bericht } = req.body;

  if (!naam || !email || !bericht) {
    return res.status(400).json({ message: "Verplichte velden ontbreken" });
  }

  try {
    await appendToSheet({ naam, email, telefoon, bericht });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Google Sheets error:", err);
    return res.status(500).json({ message: "Kon bericht niet opslaan" });
  }
});

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({ message });
  console.error(err);
});

// Serve static files from dist/public
const distPath = path.resolve(process.cwd(), "dist/public");

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));

  // Fall through to index.html for client-side routing
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

export default app;
