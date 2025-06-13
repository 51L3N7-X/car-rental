import { db } from "@/lib/db";
import { cars } from "@/db/schema"; 
import { eq } from "drizzle-orm";

export async function GET() {
  const allCars = await db.select().from(cars);
  return Response.json(allCars);
}
