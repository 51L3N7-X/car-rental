"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function DashboardPage() {
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Burgers Menu</h1>
      <Button className="mb-4" onClick={() => {}}>
        Add Car
      </Button>
     

      {/* Dialog for Add or Edit */}
      
      <Separator className="mb-2"></Separator>
      <h1 className="text-2xl font-semibold my-4">Ads Images</h1>
      <Button className="mb-4" onClick={() => {}}>
        Add Image
      </Button>
    </div>
  );
}
