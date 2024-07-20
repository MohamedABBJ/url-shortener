"use client";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";

export default function Home() {
  return (
    <>
      <div className="animate-changing-colors">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
