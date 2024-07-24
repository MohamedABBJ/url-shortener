"use server";

import { count, eq } from "drizzle-orm";
import { date, pgTable, text } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/postgres-js";
import { nanoid } from "nanoid";
import postgres from "postgres";
import { auth } from "../../auth";

export const urlShortener = async (urlToShorten: string) => {
  const randomID = nanoid().substring(0, 6);
  const session = await auth();
  const userEmail = session ? session.user?.email : "Guest";

  console.log(session);

  const query = postgres(`${process.env.POSTGRES_URL}`);
  const db = drizzle(query);
  const url_data = pgTable(`url_data`, {
    user_email: text("user_email"),
    og_url: text("og_url"),
    shorted_url: text("shortened_url"),
  });

  try {
    const checkIfExist = await db
      .select()
      .from(url_data)
      .where(eq(url_data.og_url, urlToShorten));

    if (checkIfExist.length > 0) {
      return checkIfExist[0].shorted_url;
    }
    if (checkIfExist.length == 0) {
      await db.insert(url_data).values({
        og_url: urlToShorten,
        shorted_url: randomID,
        user_email: userEmail,
      });
      return randomID;
    }
  } catch (error) {
    alert(error);
  }
};
