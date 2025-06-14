import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { genUploader } from "uploadthing/client";
import Image from "next/image";
import { UploadButton } from "@/utils/uploadthing";
import { useSession } from "next-auth/react";
import { Car } from "@/types/public";
import { Checkbox } from "./ui/checkbox";

// @ts-expect-error TODO
export const { uploadFiles } = genUploader<unknown>();

export function AddOrEditItem({
  open,
  setOpen,
  carData,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  carData?: Car | null;
}) {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const form = useForm<Car>({
    defaultValues: {
      name: carData?.name || "",
      price: carData?.price || 0,
      available: carData?.available ?? true,
    },
  });

  const { handleSubmit, reset } = form;
  const queryClient = useQueryClient();

  const { data: session } = useSession();

  useEffect(() => {
    if (carData) {
      reset(carData);
      setImageURL(carData.image);
    } else {
      reset({ name: "" });
      setImageURL("");
    }
  }, [open, carData, reset]);

  const mutation = useMutation({
    mutationFn: async (data: Car) => {
      try {
        const response = await fetch(
          `/api/cars${carData?.id ? `/${carData.id}` : ""}`,
          {
            method: carData?.id ? "PUT" : "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${session?.accessToken}`,
            },
            body: JSON.stringify(data),
          }
        );
        const car = await response.json();
        return car;
      } catch (error) {
        console.error(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cars"] });
      setOpen(false);
    },
  });

  function onSubmit(data: Car) {
    mutation.mutate({ ...data, image: imageURL as string });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{carData ? "Edit Car" : "Add Car"}</DialogTitle>
          <DialogDescription>
            {carData
              ? "Edit car details below."
              : "Create a new car here. Click add when done."}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <UploadButton
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    setImageURL(res[0].url);
                  }}
                  onUploadError={(error: Error) => {
                    alert(`ERROR! ${error.message}`);
                  }}
                />
              </FormControl>
              <FormDescription>Upload an image of the car.</FormDescription>
              {imageURL && (
                <Image
                  src={imageURL}
                  alt="Uploaded preview"
                  className="mt-2"
                  width={128}
                  height={128}
                />
              )}
            </FormItem>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Nissan" {...field} />
                  </FormControl>
                  <FormDescription>Car Name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g. 100" {...field} />
                  </FormControl>
                  <FormDescription>
                    Set the rental price per day (in USD or your currency).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="available"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value ?? false}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Available</FormLabel>
                    <FormDescription>
                      Check this if the car is currently available for rental.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit(onSubmit)}>
            {carData ? "Update" : "Add"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
