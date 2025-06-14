import { db } from "@/lib/db";
import { bookings } from "@/db/schema";
import { v4 as uuid } from "uuid";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await db.insert(bookings).values({
      id: uuid(),
      ...body,
    });
    return NextResponse.json({ message: "Booking created" });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const all = await db.select().from(bookings);
    return NextResponse.json(all);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
