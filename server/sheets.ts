import { google } from "googleapis";
import { z } from "zod";

export const contactSchema = z.object({
    naam: z.string().trim().min(2).max(100),
    email: z.string().trim().max(254).email(),
    telefoon: z.string().trim().max(40).optional().default(""),
    bericht: z.string().trim().min(10).max(5000),
}).strict();

export type ContactData = z.infer<typeof contactSchema>;
export const CONTACT_SHEET_RANGE = "Fatfinger!A:E";

// Google Sheets interprets USER_ENTERED values that start with these characters
// as formulas. Prefixing an apostrophe keeps the displayed value unchanged while
// forcing Sheets to store it as text.
export function asSpreadsheetText(value: string): string {
    return /^[=+\-@\t\r]/.test(value.trimStart()) ? `'${value}` : value;
}

export function buildContactRow(data: ContactData, timestamp: string): string[] {
    return [
        timestamp,
        asSpreadsheetText(data.naam),
        asSpreadsheetText(data.email),
        asSpreadsheetText(data.telefoon),
        asSpreadsheetText(data.bericht),
    ];
}

export async function appendToSheet(data: ContactData): Promise<void> {
    const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const key = process.env.GOOGLE_PRIVATE_KEY;
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    if (!email || !key || !spreadsheetId) {
        throw new Error("Missing Google Sheets environment variables");
    }

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: email,
            private_key: key.replace(/\\n/g, "\n"),
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const timestamp = new Date().toLocaleString("nl-NL", { timeZone: "Europe/Amsterdam" });

    await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: CONTACT_SHEET_RANGE,
        valueInputOption: "USER_ENTERED",
        requestBody: {
            values: [buildContactRow(data, timestamp)],
        },
    });
}
