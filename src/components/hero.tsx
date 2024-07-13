"use client";

import { urlShortener } from "@/utils/url-shortener";
import { useEffect } from "react";

export const Hero = () => {
  return (
    <div className="h-lvh flex items-center justify-center">
      <div className="flex flex-col gap-3 text-center">
        <h1>Turbocharge your marketing with Short Links.</h1>
        <p>Shortener url, Big Impact</p>
        <input
          onKeyDown={(event) =>
            event.key == "Enter" ? urlShortener(event.currentTarget.value) : ""
          }
          type="text"
          name=""
          id=""
        />
        <p>0 links created</p>
      </div>
    </div>
  );
};
