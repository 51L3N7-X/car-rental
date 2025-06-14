ALTER TABLE `bookings` ADD `name` text NOT NULL;--> statement-breakpoint
ALTER TABLE `bookings` ADD `phone` text NOT NULL;--> statement-breakpoint
ALTER TABLE `bookings` ADD `status` text DEFAULT 'pending' NOT NULL;--> statement-breakpoint
ALTER TABLE `bookings` DROP COLUMN `user_name`;