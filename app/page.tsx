"use client";

import CarsLandingList from "@/components/CarsLandingList";
import SwiperComponent from "@/components/swiper/Swiper";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <SwiperComponent></SwiperComponent>
      <h1 className="text-center text-9xl font-bold my-[120px] tracking-tighter">
        CARS
      </h1>
      <div className="container mx-auto p-4">
        <CarsLandingList></CarsLandingList>
      </div>
    </div>
  );
}
