"use client";

import { urlShortener } from "@/utils/url-shortener";
import { useEffect, useState } from "react";
import { ShortedUrl } from "./shorted-url";
import urlShortenedIDStore from "@/store/url-shortened-id-store";
import urlShortedQuantity from "@/utils/url-shorted-quantity";

export const Hero = () => {
  const exampleURL = "https://www.google.com/";
  const [urlInputValue, setUrlInputValue] = useState("");
  const { urlID, setUrlID } = urlShortenedIDStore();
  const [urlShortedQuantityValue, seturlShortedQuantityValue] =
    useState<number>();

  useEffect(() => {
    const getUrlShortedQuantity = async () => {
      seturlShortedQuantityValue(await urlShortedQuantity());
    };
    getUrlShortedQuantity();
  }, []);

  return (
    <div className="h-lvh flex items-center justify-center">
      <div className="mb-20 flex items-center flex-col gap-3 text-center">
        <h1 className="text-5xl scale-75 md:scale-100 leading-[3.3rem] font-bold bg-gradient-to-b from-yellow-500 to-red-500  bg-clip-text text-transparent w-[450px]">
          Turbocharge your marketing with Short Links.
        </h1>
        <div className="flex [&_p]:text-sm md:mt-8 mt-0 last-of-type:[&_p]:ml-1">
          <p>Shortener url,</p>
          <p className="font-bold">Big Impact</p>
        </div>
        <input
          className="md:w-full w-80 text-sm h-10 rounded-lg drop-shadow-xl pl-3 placeholder:text-gray-500"
          onChange={(event) => setUrlInputValue(event.currentTarget.value)}
          placeholder={exampleURL}
          onKeyDown={async (event) =>
            event.key == "Enter" && urlInputValue.startsWith("http")
              ? setUrlID(
                  (await urlShortener(event.currentTarget.value)) as string
                )
              : ""
          }
          type="text"
          name=""
          id=""
        />
        {urlInputValue != "" && urlInputValue.startsWith("http") ? (
          <button
            className="text-sm bg-black text-white rounded-lg h-10 w-6/12 hover:bg-gray-600 transition-colors duration-300"
            onClick={async () =>
              setUrlID((await urlShortener(urlInputValue)) as string)
            }
          >
            Shorten
          </button>
        ) : null}
        {urlID != "" ? <ShortedUrl /> : null}
        <div className="flex items-center gap-2 mt-6">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-ping" />
          <div className="w-3 h-3 absolute rounded-full bg-green-500" />
          <p className="text-xs font-bold">
            {urlShortedQuantityValue &&
              `${urlShortedQuantityValue} links created`}
          </p>
        </div>
      </div>
    </div>
  );
};
