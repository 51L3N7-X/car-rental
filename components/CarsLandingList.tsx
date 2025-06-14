"use client";

import { Car } from "@/types/public";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

// TODO: add pagination

export default function CarsLandingList() {
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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">For Rental</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
  );
}

interface CarCardProps {
  name: string;
  imageUrl?: string | null;
  price: number;
  altText?: string;
}

function CardComponent({
  name,
  imageUrl,
  price,
  altText = "Car Picture",
}: CarCardProps) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader className="flex items-center justify-center">
        <div className="relative w-32 h-32 rounded-full overflow-hidden">
          <Image
            src={imageUrl ?? "/fallback_car.webp"}
            alt={altText}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-center text-2xl font-bold">{name}</CardTitle>
        <p className="text-center text-gray-600 text-lg mt-2">
          ${price.toLocaleString()} / day
        </p>
      </CardContent>
    </Card>
  );
}
