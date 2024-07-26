"use client";
import DBDataProps from "@/interfaces/db-data-props";
import shortedUrlMaker from "@/utils/shorted-url-maker";
import { useEffect, useState } from "react";

export default function GeneratedUrls(props: {
  generatedUrlData: DBDataProps;
}) {
  const [shortedUrl, setShortedUrl] = useState<string>("");

  useEffect(() => {
    setShortedUrl(
      shortedUrlMaker({
        shortedUrlID: props.generatedUrlData.shorted_url as string,
      }).replace("generate", "") as string
    );
  }, [props.generatedUrlData.shorted_url]);

  return (
    <tbody>
      <tr>
        <th className="border">{props.generatedUrlData.date_created}</th>
        <th className="border">{props.generatedUrlData.og_url}</th>
        <th className="border">{shortedUrl}</th>
      </tr>
    </tbody>
  );
}
