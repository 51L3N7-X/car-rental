CREATE TABLE `bookings` (
	`id` text PRIMARY KEY NOT NULL,
	`car_id` text NOT NULL,
	`user_name` text NOT NULL,
	`start_date` text NOT NULL,
	`end_date` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `cars` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`image` text,
	`price` integer NOT NULL,
	`available` integer DEFAULT true
);
