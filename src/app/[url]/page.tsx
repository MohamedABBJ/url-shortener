import { middleware } from "@/middleware";
import { eq } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/postgres-js";
import { redirect } from "next/navigation";
import postgres from "postgres";

export default async function Page({ params }: { params: { url: string } }) {
  const query = postgres(`${process.env.POSTGRES_URL}`);
  const db = drizzle(query);
  const url_data = pgTable(`url_data`, {
    og_url: text("og_url"),
    shorted_url: text("shortened_url"),
  });

  const obtainedData = await db
    .select()
    .from(url_data)
    .where(eq(url_data.shorted_url, params.url));
}
