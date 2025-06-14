"use client"

import { CardComponent } from "@/components/CardComponent";
import { Car } from "@/types/public";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

export default function page() {
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

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("fetchCars error:", error);
      return [];
    }
  }

  const { data: cars, isLoading } = useQuery({
    queryKey: ["cars"],
    queryFn: fetchCars,
  });

  if (isLoading) return <p>Loading...</p>;
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Cars List</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars?.length &&
            cars.map((car, index) => (
              <Link href={`/car/${car.id}`} key={index}>
                <CardComponent
                  name={car.name}
                  imageUrl={car.image}
                  price={car.price}
                />
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
