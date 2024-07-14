"use server";

import { pgTable, text } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export const urlShortener = async (urlToShorten: string) => {
  const randomUrlID = () => {
    const min = 100000;
    const max = 999999;

    return Math.floor(Math.random() * (max - min) + min);
  };

  const urlShortenedID = `${randomUrlID()}`;

  const query = postgres(`${process.env.POSTGRES_URL}`);

  const db = drizzle(query);

  const url_data = pgTable(`url_data`, {
    og_url: text("og_url"),
    shorted_url: text("shortened_url"),
  });
  try {
    const response = await db
      .insert(url_data)
      .values({ og_url: urlToShorten, shorted_url: urlShortenedID });
    return urlShortenedID;
  } catch (error) {
    alert(error);
  }
};
