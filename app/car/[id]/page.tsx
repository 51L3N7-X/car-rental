"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type Car = {
  id: string;
  name: string;
  image?: string | null;
  price: number;
  available: boolean;
};

export default function CarPage() {
  const { id } = useParams();
  const router = useRouter();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCar() {
      try {
        const res = await fetch(`/api/cars/${id}`);
        if (!res.ok) throw new Error("Failed to fetch car");
        const data = await res.json();
        if (!data.id) {
          router.push("/404");
          return;
        }
        setCar(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCar();
  }, [id, router]);

  if (loading) return <div className="p-6 text-center">Loading...</div>;

  if (!car) return <div className="p-6 text-center">Car not found.</div>;

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">{car.name}</h1>

      {car.image ? (
        <Image
          src={car.image}
          alt={car.name}
          width={512}
          height={512}
          className="w-full max-h-64 object-cover rounded"
        />
      ) : (
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded">
          <span className="text-gray-400">No image available</span>
        </div>
      )}

      <p className="text-xl font-semibold">
        Price: ${car.price.toLocaleString()}
      </p>

      <p
        className={`font-semibold ${
          car.available ? "text-green-600" : "text-red-600"
        }`}
      >
        {car.available ? "Available" : "Not Available"}
      </p>

      {car.available ? (
        <Link href={`/book?carId=${car.id}`}>
          <Button size="lg" className="mt-4 bg-blue-600">
            Book This Car
          </Button>
        </Link>
      ) : (
        <Button size="lg" className="mt-4" disabled>
          Not Available
        </Button>
      )}
    </div>
  );
}
