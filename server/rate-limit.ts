import type { Request, RequestHandler } from "express";

interface Bucket {
  count: number;
  resetAt: number;
}

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_ADDRESS = 5;
const buckets = new Map<string, Bucket>();
let checksSinceCleanup = 0;

function clientAddress(request: Request): string {
  if (process.env.VERCEL) {
    const forwarded = request.get("x-vercel-forwarded-for")?.split(",")[0]?.trim()
      ?? request.get("x-forwarded-for")?.split(",")[0]?.trim();
    if (forwarded) return forwarded;
  }

  if (process.env.TRUST_PROXY === "1") {
    const forwarded = request.get("x-forwarded-for")?.split(",")[0]?.trim();
    if (forwarded) return forwarded;
  }

  return request.socket.remoteAddress ?? "unknown";
}

export function consumeContactLimit(key: string, now = Date.now()): { allowed: boolean; retryAfter: number } {
  checksSinceCleanup += 1;
  if (checksSinceCleanup >= 100) {
    buckets.forEach((bucket, bucketKey) => {
      if (bucket.resetAt <= now) buckets.delete(bucketKey);
    });
    checksSinceCleanup = 0;
  }

  const current = buckets.get(key);
  if (!current || current.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }

  if (current.count >= MAX_REQUESTS_PER_ADDRESS) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  return { allowed: true, retryAfter: 0 };
}

export const contactRateLimit: RequestHandler = (request, response, next) => {
  const result = consumeContactLimit(clientAddress(request));
  if (result.allowed) {
    next();
    return;
  }

  response.setHeader("Retry-After", result.retryAfter.toString());
  response.status(429).json({ message: "Te veel aanvragen. Probeer later opnieuw." });
};
