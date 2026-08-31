import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { metaImagesPlugin } from "./vite-plugin-meta-images";

const allowedHosts = [
  process.env.REPLIT_DEV_DOMAIN,
  process.env.REPLIT_INTERNAL_APP_DOMAIN,
  ...(process.env.VITE_ALLOWED_HOSTS?.split(",") ?? []),
].filter((host): host is string => Boolean(host?.trim())).map((host) => host.trim());

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    metaImagesPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
    },
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          carousel: ["embla-carousel-autoplay", "embla-carousel-react"],
          forms: ["@hookform/resolvers", "react-hook-form", "zod"],
          motion: ["framer-motion"],
          react: ["react", "react-dom", "wouter"],
        },
      },
    },
  },
  server: {
    host: process.env.REPL_ID ? "0.0.0.0" : "127.0.0.1",
    allowedHosts,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
