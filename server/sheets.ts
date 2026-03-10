import { google } from "googleapis";

export interface ContactData {
    naam: string;
    email: string;
    telefoon?: string;
    bericht: string;
}

export async function appendToSheet(data: ContactData): Promise<void> {
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
