import assert from "node:assert/strict";
import test from "node:test";

import { buildContactRow, CONTACT_SHEET_RANGE, contactSchema } from "./sheets";
import { consumeContactLimit } from "./rate-limit";

test("keeps the Fatfinger spreadsheet contract intact", () => {
  const parsed = contactSchema.parse({
    naam: "Test Persoon",
    email: "test@example.com",
    telefoon: "+31 6 12345678",
    bericht: "Dit is een testbericht.",
  });

  assert.equal(CONTACT_SHEET_RANGE, "Fatfinger!A:E");
  assert.deepEqual(buildContactRow(parsed, "timestamp"), [
    "timestamp",
    "Test Persoon",
    "test@example.com",
    "'+31 6 12345678",
    "Dit is een testbericht.",
  ]);
});

test("rejects unknown input and neutralises spreadsheet formulas", () => {
  const withUnknownField = contactSchema.safeParse({
    naam: "Test Persoon",
    email: "test@example.com",
    telefoon: "",
    bericht: "Dit is een testbericht.",
    admin: true,
  });
  const malicious = contactSchema.parse({
    naam: '=IMPORTXML("https://example.com")',
    email: "test@example.com",
    telefoon: "",
    bericht: "@SUM(1,1) is geen formule",
  });
  const row = buildContactRow(malicious, "timestamp");

  assert.equal(withUnknownField.success, false);
  assert.equal(row[1]?.startsWith("'="), true);
  assert.equal(row[4]?.startsWith("'@"), true);
});

test("rate limits repeated submissions", () => {
  const key = `test-${Date.now()}-${Math.random()}`;
  const start = 1_000_000;

  for (let index = 0; index < 5; index += 1) {
    assert.equal(consumeContactLimit(key, start).allowed, true);
  }

  const blocked = consumeContactLimit(key, start);
  assert.equal(blocked.allowed, false);
  assert.equal(blocked.retryAfter, 600);
});
