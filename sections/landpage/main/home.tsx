"use client"

import Footer from "@/sections/landpage/Footer";
import HeroSection from "@/sections/landpage/HeroSection";
import HowItWorks from "@/sections/landpage/HowItWorks";
import WhyUs from "@/sections/landpage/WhyUs";
import PopularCars from "../PopularCars";

export default function LandPageHome() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection></HeroSection>
      <WhyUs></WhyUs>
      <PopularCars></PopularCars>
      <HowItWorks></HowItWorks>
      <Footer></Footer>
    </div>
  );
}
