"use server";

import { pgTable, text } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/postgres-js";
import { url } from "inspector";
import postgres from "postgres";

export const urlShortener = async (urlToShorten: string) => {
  //
  //www.google.com/

  //https://www.pndek.com/123456
  //123456 are custom IDS that will work in this way, it will create a new link that has these values random
  const randomUrlID = () => {
    const min = 100000;
    const max = 999999;

    return Math.floor(Math.random() * (max - min) + min);
  };

  const urlShortened = `/${randomUrlID()}`;

  const query = postgres(`${process.env.POSTGRES_URL}`);

  const db = drizzle(query);

  const url_data = pgTable(`url_data`, {
    og_url: text("og_url"),
    shorted_url: text("shortened_url"),
  });

  await db
    .insert(url_data)
    .values({ og_url: urlToShorten, shorted_url: urlShortened });
};
