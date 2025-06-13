"use client";

import SwiperComponent from "@/components/swiper/Swiper";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <SwiperComponent></SwiperComponent>
      <h1 className="text-center text-9xl font-bold my-[120px] tracking-tighter">
        ITEMS
      </h1>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Burgers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"></div>
      </div>
    </div>
  );
}
