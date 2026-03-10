import express, { type Request, Response, NextFunction } from "express";
import path from "path";
import fs from "fs";
import { appendToSheet } from "../server/sheets";

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
