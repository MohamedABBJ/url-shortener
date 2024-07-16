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
      <div className="flex items-center flex-col gap-3 text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-b from-yellow-500 to-red-500  bg-clip-text text-transparent w-5/12">
          Turbocharge your marketing with Short Links.
        </h1>
        <div className="flex [&_p]:text-sm mt-8 last-of-type:[&_p]:ml-1">
          <p>Shortener url,</p>
          <p className="font-bold">Big Impact</p>
        </div>
        <input
          className="w-6/12 h-8 rounded-lg drop-shadow-xl pl-3"
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
        <p className="text-xs font-bold mt-4">{`${urlShortedQuantityValue} links created`}</p>
      </div>
    </div>
  );
};
