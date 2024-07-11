"use client";
import { useEffect, useState } from "react";

interface UseShortenLinkProps {
  value: string;
}

export const useShortenLink = (value: UseShortenLinkProps) => {
  const [urlToShorten, setUrlToShorten] = useState<UseShortenLinkProps>(value);

  useEffect(() => {
    if (urlToShorten.value != "") {
      alert(urlToShorten.value);
    }
  }, [urlToShorten]);

  return { urlToShorten, setUrlToShorten };
};
