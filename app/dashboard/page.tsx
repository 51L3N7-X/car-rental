"use client";

import { Button } from "@/components/ui/button";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import { AddOrEditItem } from "@/components/AddItemDialog";
import { DeleteDialog } from "@/components/DeleteDialog";
import { Separator } from "@/components/ui/separator";
import { Car } from "@/types/public";
import { Checkbox } from "@/components/ui/checkbox";

export default function DashboardPage() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingCar, setEditingCar] = useState<Car | null>(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [carIdToDelete, setCarIdToDelete] = useState<string | null>(null);

  const queryClient = useQueryClient();

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

  const {
    data: cars,
    isLoading,
    error,
  } = useQuery({ queryKey: ["cars"], queryFn: fetchCars });

  // Mutation to update availability status
  const updateAvailabilityMutation = useMutation({
    mutationFn: async ({
      id,
      available,
    }: {
      id: string;
      available: boolean;
    }) => {
      const response = await fetch(`/api/cars/${id}`, {
        method: "PATCH", // or PUT depending on your API
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ available }),
      });
      if (!response.ok) throw new Error("Failed to update availability");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cars"] });
    },
  });

  if (isLoading) return <p>Loading cars...</p>;
  if (error) return <p>Error loading cars</p>;

  const handleAddClick = () => {
    setEditingCar(null);
    setIsAddOpen(true);
  };

  const handleEditClick = (car: Car) => {
    setEditingCar(car);
    setIsAddOpen(true);
  };

  const handleDeleteClick = (carId: string) => {
    setCarIdToDelete(carId);
    setIsDeleteOpen(true);
  };

  const handleAvailableChange = (carId: string, checked: boolean) => {
    updateAvailabilityMutation.mutate({ id: carId, available: checked });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Cars Menu</h1>
      <Button className="mb-4" onClick={handleAddClick}>
        Add Car
      </Button>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Available</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cars?.map((car: Car) => (
            <TableRow key={car.id}>
              <TableCell>{car.id}</TableCell>
              <TableCell>{car.name}</TableCell>
              <TableCell>
                <Image
                  src={car.image || "/fallback_car.jpg"}
                  alt={car.name}
                  className="w-16 h-16 object-cover rounded-full"
                  width={64}
                  height={64}
                />
              </TableCell>
              <TableCell>
                {car.price ? `$${car.price.toFixed(2)}` : "-"}
              </TableCell>
              <TableCell>
                <Checkbox
                  checked={car.available ?? false}
                  onCheckedChange={(checked) =>
                    handleAvailableChange(car.id, checked as boolean)
                  }
                />
              </TableCell>
              <TableCell className="flex items-center justify-center h-16 w-16 gap-2">
                <Pencil
                  size={16}
                  className="cursor-pointer"
                  onClick={() => handleEditClick(car)}
                />
                <Trash
                  size={16}
                  className="cursor-pointer"
                  onClick={() => handleDeleteClick(String(car.id))}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <AddOrEditItem
        open={isAddOpen}
        setOpen={setIsAddOpen}
        carData={editingCar}
      />

      <DeleteDialog
        open={isDeleteOpen}
        setOpen={setIsDeleteOpen}
        carId={carIdToDelete}
      />

      <Separator className="mb-2" />
      <h1 className="text-2xl font-semibold my-4">Ads Images</h1>
      <Button className="mb-4" onClick={() => {}}>
        Add Image
      </Button>
    </div>
  );
}
