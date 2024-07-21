"use client";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import googleSignIn from "@/utils/google-sign-in";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const currentURL = window.location.href;
    const params = new URLSearchParams(currentURL);
    const accessToken = params.get("access_token");

    if (accessToken) {
      googleSignIn({ mode: "checkUserIdentity", acessToken: accessToken });
    }
  }, []);

  return (
    <>
      <div className="animate-changing-colors">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
