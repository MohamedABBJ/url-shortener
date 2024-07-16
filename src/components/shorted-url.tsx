"use client";

import urlShortenedIDStore from "@/store/url-shortened-id-store";
import arrowLinkIcon from "../../public/arrowLink.svg";
import copyURLIcon from "../../public/copyURL.svg";
import resetURLIcon from "../../public/resetURL.svg";
import { ShortedUrlButtonOptions } from "./shorted-url-options";
import { useEffect, useState } from "react";

export const ShortedUrl = () => {
  const { urlID } = urlShortenedIDStore();
  const [fullShortedUrl, setFullShortedUrl] = useState("");
  const options = [
    {
      name: "Visit",
      iconSrc: arrowLinkIcon,
      id: 1,
    },
    {
      name: "Copy",
      iconSrc: copyURLIcon,
      id: 2,
    },
    {
      name: "Reset",
      iconSrc: resetURLIcon,
      id: 3,
    },
  ];

  useEffect(() => {
    setFullShortedUrl(`${window.location}${urlID}`);
  }, [urlID]);

  return (
    <>
      <div className="bg-white w-6/12 rounded-lg">
        <input
          className="bg-gray-100 w-11/12 pl-4 font-bold text-xs mt-4 h-10 rounded-lg"
          value={fullShortedUrl}
          type="text"
          disabled
        />
        <div className="flex justify-center">
          {options.map((element) => (
            <ShortedUrlButtonOptions {...element} key={element.id} />
          ))}
        </div>
      </div>
    </>
  );
};
