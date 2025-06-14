import { db } from "@/lib/db";
import { cars } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const car = await db.select().from(cars).where(eq(cars.id, params.id));
  return NextResponse.json(car[0] || {});
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await req.json();
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

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  try {
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
