import { sql } from "@vercel/postgres";
import { eq } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { usePathname } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import postgres from "postgres";

export async function middleware(request: NextRequest) {
  const db = drizzle(sql);
  const url_data = pgTable(`url_data`, {
    og_url: text("og_url"),
    shorted_url: text("shortened_url"),
  });

  const obtainedData = await db
    .select()
    .from(url_data)
    .where(eq(url_data.shorted_url, request.nextUrl.pathname.substring(1)));

  return NextResponse.redirect(obtainedData[0].og_url as string);
}

export const config = {
  matcher: "/((?!_|favicon.ico|signin|generate|$).*)",
};
