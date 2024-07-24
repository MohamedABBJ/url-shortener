import { auth } from "../../../auth";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { pgTable, text } from "drizzle-orm/pg-core";
import { eq } from "drizzle-orm";

export async function getUserGeneratedUrls() {
  const session = await auth();
  const userEmail = session && session.user?.email;

  const query = postgres(`${process.env.POSTGRES_URL}`);
  const db = drizzle(query);
  const url_data = pgTable(`url_data`, {
    user_email: text("user_email"),
    og_url: text("og_url"),
    shorted_url: text("shortened_url"),
  });

  try {
    const userGeneratedUrls = await db
      .select()
      .from(url_data)
      .where(eq(url_data.user_email, userEmail as string));
    return userGeneratedUrls;
  } catch (error) {
    console.log(error);
  }
}
