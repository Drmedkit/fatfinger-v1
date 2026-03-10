import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { appendToSheet } from "./sheets";

export async function registerRoutes(app: Express): Promise<Server> {
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

  const httpServer = createServer(app);
  return httpServer;
}
