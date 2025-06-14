import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Fuel, Settings, Users } from "lucide-react";
import { Button } from "./ui/button";

interface CarCardProps {
  name: string;
  imageUrl?: string | null;
  price: number;
}

export function CardComponent({ name, imageUrl, price }: CarCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="relative">
        <Image
          src={imageUrl || "/placeholder.svg?height=200&width=400"}
          alt={name}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-4 left-4 bg-green-500 hover:bg-green-500 text-white">
          Popular
        </Badge>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-gray-500 dark:text-gray-400">Comfort & Style</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              ${price.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">/day</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            5 seats
          </div>
          <div className="flex items-center">
            <Settings className="h-4 w-4 mr-1" />
            Automatic
          </div>
          <div className="flex items-center">
            <Fuel className="h-4 w-4 mr-1" />
            Hybrid
          </div>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
}
