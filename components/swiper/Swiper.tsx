"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";
import Image from "next/image";
import { Button } from "../ui/button";

const Action = () => {
  return (
    <div className="absolute left-2 bottom-[20vh] text-white flex flex-col justify-start md:left-6">
      {
        //left-4 bottom-[20vh]
      }
      <h1 className="text-3xl mb-2 tracking-tighter md:text-6xl md:mb-3">
        BE DISTINGUISHED
      </h1>
      <Button
        variant="outline"
        className="bg-transparent font-bold w-[170px] h-[35px] md:w-[260] md:h-[50] dark:border-white"
        // w-260 h-50}
        size="lg"
      >
        <p className="text-lg font-medium md:text-xl">ORDER NOW</p>
        {
          // text-xl
        }
      </Button>
    </div>
  );
};

const HeroImage = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      alt="Image"
      width={1440}
      height={600}
      className="object-cover w-full h-full"
    ></Image>
  );
};

export default function SwiperComponent() {
  return (
    <div className="w-screen overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
        modules={[Autoplay, Navigation, Pagination]}
        className="w-full overflow-hidden cursor-pointer"
      >
        <SwiperSlide className="overflow-hidden relative font-bold">
          <Action></Action>
          <HeroImage src="/1.jpg"></HeroImage>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden relative font-bold">
          <Action></Action>
          <HeroImage src="/2.jpg"></HeroImage>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden relative font-bold">
          <Action></Action>
          <HeroImage src="/3.jpg"></HeroImage>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
