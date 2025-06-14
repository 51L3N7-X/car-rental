"use client";

import { Car } from "@/types/public";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import { Button } from "../../components/ui/button";
import { CardComponent } from "../../components/CardComponent";

export default function PopularCars() {
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
    <section className="py-20 bg-white dark:bg-gray-950 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Popular Cars
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Choose from our most loved vehicles
          </p>
        </div>

        {isLoading ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Loading...
          </p>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars?.length ? (
                cars.map((car) => (
                  <Link href={`/car/${car.id}`} key={car.id}>
                    <CardComponent
                      name={car.name}
                      imageUrl={car.image}
                      price={car.price}
                    />
                  </Link>
                ))
              ) : (
                <p className="col-span-full text-center text-gray-500">
                  No cars available.
                </p>
              )}
            </div>

            <div className="text-center mt-12">
              <Link href="/list">
                <Button variant="outline" size="lg" className="px-8">
                  View All Cars
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
