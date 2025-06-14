import { db } from "@/lib/db";
import { cars } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { v4 as uuid } from "uuid";

const SECRET_KEY = process.env.NEXTAUTH_SECRET as string;

export async function GET() {
  try {
    const allCars = await db.select().from(cars);
    return NextResponse.json(allCars);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get("authorization")?.split(" ")[1];

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    jwt.verify(token, SECRET_KEY);
    const body = await request.json();
    await db.insert(cars).values({
      id: uuid(),
      ...body,
    });
    return NextResponse.json({ message: "Car added" });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Invalid Token" }, { status: 403 });
  }
}
