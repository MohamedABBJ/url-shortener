"use client";
import DBDataProps from "@/interfaces/db-data-props";
import dateFormatter from "@/utils/date-formatter";
import shortedUrlMaker from "@/utils/shorted-url-maker";
import { useEffect, useState } from "react";

export default function GeneratedUrls(props: {
  generatedUrlData: DBDataProps;
}) {
  const ogURL = props.generatedUrlData.og_url;
  const [shortedUrl, setShortedUrl] = useState<string>("");
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    setShortedUrl(
      shortedUrlMaker({
        shortedUrlID: props.generatedUrlData.shorted_url as string,
      }).replace("generate", "") as string
    );
    setFormattedDate(
      dateFormatter({
        dateValue: props.generatedUrlData.date_created as string,
      })
    );
  }, [props.generatedUrlData.shorted_url, props.generatedUrlData.date_created]);

  return (
    <tbody>
      <tr>
        <th className="border">{formattedDate}</th>
        <th className="border">{ogURL}</th>
        <th className="border">{shortedUrl}</th>
      </tr>
    </tbody>
  );
}
