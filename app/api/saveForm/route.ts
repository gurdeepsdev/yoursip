// app/api/saveForm/route.ts
import { google } from "googleapis";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, businessType, quantity, message } = body;

    //  Load JSON key file directly
    const keyFile = path.join(process.cwd(), "service-account.json");

    const auth = new google.auth.GoogleAuth({
      keyFile, // <-- instead of private_key in env
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            name,
            email,
            businessType,
            quantity,
            message,
            new Date().toISOString(),
          ],
        ],
      },
    });

    return NextResponse.json({ message: "" });
  } catch (err) {
    console.error("Error saving data:", err);
    return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
  }
}
