import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-100">
                🚗 Premium Car Rental Service
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Find Your Perfect
                <span className="text-blue-600 dark:text-blue-400"> Rental Car</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Discover the freedom of the road with our premium fleet of
                vehicles. From economy to luxury, we have the perfect car for
                every journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  Book Now
                </Button>
              </Link>

              <Link href="/list">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-3 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                >
                  View Fleet
                </Button>
              </Link>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">10K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Cars Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Locations</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/hero.jpg?height=500&width=600"
              alt="Premium rental car"
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 dark:bg-green-800 p-2 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Instant Booking
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Available 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
