import type { Express, RequestHandler } from "express";
import { contactRateLimit } from "./rate-limit";
import { appendToSheet, contactSchema } from "./sheets";

function hasAllowedOrigin(origin: string | undefined, host: string | undefined): boolean {
  if (!origin) return true;

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

const requireSameOrigin: RequestHandler = (req, res, next) => {
  const forwardedHost = process.env.TRUST_PROXY === "1" && !process.env.VERCEL
    ? req.get("x-forwarded-host")?.split(",")[0]?.trim()
    : undefined;

  if (!hasAllowedOrigin(req.get("origin"), forwardedHost ?? req.get("host"))) {
    res.status(403).json({ message: "Aanvraag geweigerd" });
    return;
  }

  next();
};

export function registerRoutes(app: Express): void {
  app.post("/api/contact", requireSameOrigin, contactRateLimit, async (req, res) => {
    const parsed = contactSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Verplichte velden ontbreken" });
    }

    try {
      await appendToSheet(parsed.data);
      return res.status(200).json({ ok: true });
    } catch (err) {
      console.error("Google Sheets contact submission failed", err instanceof Error ? err.message : err);
      return res.status(500).json({ message: "Kon bericht niet opslaan" });
    }
  });

  app.all("/api/contact", (_req, res) => {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Methode niet toegestaan" });
  });
}
