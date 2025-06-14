"use client";

import { CardComponent } from "@/components/CardComponent";
import { Car } from "@/types/public";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

export default function Page() {
  async function fetchCars(): Promise<Car[]> {
    try {
      const response = await fetch(`${window.location.origin}/api/cars`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      if (!response.ok) {
        console.error(`API Error: ${response.status} ${response.statusText}`);
        throw new Error("Failed to fetch cars");
      }

      return await response.json();
    } catch (error) {
      console.error("fetchCars error:", error);
      return [];
    }
  }

  const { data: cars, isLoading } = useQuery({
    queryKey: ["cars"],
    queryFn: fetchCars,
  });

  return (
    <section className="py-20 bg-white dark:bg-gray-950 transition-colors min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Cars List
          </h2>
        </div>

        {isLoading ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Loading...
          </p>
        ) : cars?.length ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <Link href={`/car/${car.id}`} key={car.id}>
                <CardComponent
                  name={car.name}
                  imageUrl={car.image}
                  price={car.price}
                />
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No cars found.
          </p>
        )}
      </div>
    </section>
  );
}
