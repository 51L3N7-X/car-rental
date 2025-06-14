import { db } from "@/lib/db";
import { cars } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.NEXTAUTH_SECRET as string;

export async function GET(
  _: Request,
  { params }: { params: { id: string } }
) {
  try {
    const car = await db.select().from(cars).where(eq(cars.id, params.id));
    return NextResponse.json(car[0] || {});
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const token = request.headers.get("authorization")?.split(" ")[1];

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    jwt.verify(token, SECRET_KEY);
    const data = await request.json();
    await db.update(cars).set(data).where(eq(cars.id, params.id));
    return NextResponse.json({ message: "Car Updated" });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const token = request.headers.get("authorization")?.split(" ")[1];

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    jwt.verify(token, SECRET_KEY);
    const data = await request.json();
    await db.update(cars).set(data).where(eq(cars.id, params.id));
    return NextResponse.json({ message: "Car partially updated" });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const token = request.headers.get("authorization")?.split(" ")[1];

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    jwt.verify(token, SECRET_KEY);
    await db.delete(cars).where(eq(cars.id, params.id));
    return NextResponse.json({ message: "Car Deleted" });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
