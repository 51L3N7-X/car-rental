import { type InferSelectModel } from "drizzle-orm";
import { cars, bookings } from "@/db/schema";

export type Car = InferSelectModel<typeof cars>;
export type Booking = InferSelectModel<typeof bookings>;
