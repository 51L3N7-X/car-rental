import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const cars = sqliteTable("cars", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  image: text("image"),
  price: integer("price").notNull(),
  available: integer("available", { mode: "boolean" }).default(true),
});

export const bookings = sqliteTable("bookings", {
  id: text("id").primaryKey(),
  carId: text("car_id").notNull(),
  userName: text("name").notNull(),
  userPhone: text("phone").notNull(),
  startDate: text("start_date").notNull(),
  endDate: text("end_date").notNull(),
  status: text("status").notNull().default("pending"),
});
