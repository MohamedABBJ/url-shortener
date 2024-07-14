"use client";

import { urlShortener } from "@/utils/url-shortener";
import { useEffect, useState } from "react";
import { ShortedUrl } from "./shorted-url";

export const Hero = () => {
  const [inputLinkIsVisible, setInputLinkIsVisible] = useState<boolean>(false);

  return (
    <div className="h-lvh flex items-center justify-center">
      <div className="flex flex-col gap-3 text-center">
        <h1>Turbocharge your marketing with Short Links.</h1>
        <p>Shortener url, Big Impact</p>
        <input
          onChange={(event) =>
            event.currentTarget.value != ""
              ? setInputLinkIsVisible(true)
              : setInputLinkIsVisible(false)
          }
          onKeyDown={(event) =>
            event.key == "Enter" ? urlShortener(event.currentTarget.value) : ""
          }
          type="text"
          name=""
          id=""
        />
        {inputLinkIsVisible ? (
          <button className="bg-black text-white rounded-lg">Shorten</button>
        ) : null}
        <ShortedUrl />
        <p>0 links created</p>
      </div>
    </div>
  );
};
