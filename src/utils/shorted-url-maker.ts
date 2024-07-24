"use client";

export default function shortedUrlMaker(props: { shortedUrlID: string }) {
  return `${window.location}${props.shortedUrlID}`;
}
