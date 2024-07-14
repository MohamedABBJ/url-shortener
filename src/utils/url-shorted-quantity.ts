"use server";

import { count } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const urlShortedQuantity = async () => {
  const query = postgres(`${process.env.POSTGRES_URL}`);

  const db = drizzle(query);

  const url_data = pgTable(`url_data`, {
    og_url: text("og_url"),
    shorted_url: text("shortened_url"),
  });

  try {
    const quantityOfShortedUrl = await db
      .select({ value: count() })
      .from(url_data);
    return quantityOfShortedUrl[0].value;
  } catch (error) {
    alert(
      `Ops! the quantity of shorted Url's cannot be fetched error:${error}`
    );
  }
};

export default urlShortedQuantity;
