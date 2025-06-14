"use client";

import { usePathname } from "next/navigation";
import Footer from "@/sections/landpage/Footer";

export default function FooterWrapper() {
  const pathname = usePathname();

  const hideFooter = pathname === "/login" || pathname.startsWith("/dashboard");

  if (hideFooter) return null;
  return <Footer />;
}
