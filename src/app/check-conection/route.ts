require("dotenv").config();
import { eq } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/postgres-js";
import { NextResponse } from "next/server";
import postgres from "postgres";

export async function GET(req: Request) {
  const query = postgres(`${process.env.POSTGRES_URL}`);

  const db = drizzle(query);

  const pets = pgTable(`url_data`, {
    url: text("url"),
    shorted_url: text("shorted_url"),
  });

  const queryTest = await db.select().from(pets);
}
