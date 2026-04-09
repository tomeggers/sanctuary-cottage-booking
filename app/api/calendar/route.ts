import { NextResponse } from "next/server";

export const revalidate = 3600;

interface BlockedDate {
  start: string;
  end: string;
  summary: string;
}

/**
 * Parse iCal text manually to extract VEVENT date ranges.
 * Avoids node-ical which has BigInt compatibility issues with Turbopack.
 */
function parseICS(icsText: string): BlockedDate[] {
  const events: BlockedDate[] = [];
  const blocks = icsText.split("BEGIN:VEVENT");

  for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i].split("END:VEVENT")[0];

    const startMatch = block.match(/DTSTART(?:;VALUE=DATE)?:(\d{4})(\d{2})(\d{2})/);
    const endMatch = block.match(/DTEND(?:;VALUE=DATE)?:(\d{4})(\d{2})(\d{2})/);
    const summaryMatch = block.match(/SUMMARY:(.*)/);

    if (startMatch && endMatch) {
      events.push({
        start: `${startMatch[1]}-${startMatch[2]}-${startMatch[3]}`,
        end: `${endMatch[1]}-${endMatch[2]}-${endMatch[3]}`,
        summary: summaryMatch ? summaryMatch[1].trim() : "",
      });
    }
  }

  return events;
}

export async function GET() {
  const icalUrl = process.env.AIRBNB_ICAL_URL;

  if (!icalUrl) {
    return NextResponse.json({ blockedDates: [] });
  }

  try {
    const response = await fetch(icalUrl, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error(`iCal fetch failed: ${response.status}`);
      return NextResponse.json({ blockedDates: [] });
    }

    const icsText = await response.text();
    const blockedDates = parseICS(icsText);

    return NextResponse.json({ blockedDates });
  } catch (error) {
    console.error("Calendar fetch error:", error);
    return NextResponse.json({ blockedDates: [] });
  }
}
