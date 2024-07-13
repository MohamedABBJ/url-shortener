import { pgTable, text } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/postgres-js";
import { NextResponse } from "next/server";
import postgres from "postgres";

export async function GET(req: Request) {
  const query = postgres(
    "postgres://default:D8kZ6XbCGQoa@ep-restless-mouse-a4ylaq8z.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
  );
  const db = drizzle(query);

  const pets = pgTable(`pets`, {
    name: text("name"),
    owner: text("owner"),
  });

  const result = await db.select().from(pets);

  return NextResponse.json({ result }, { status: 200 });
}
