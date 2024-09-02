// app/api/names/route.ts
import { NextResponse } from "next/server";
import { db } from "@repo/common/config";

// Handle GET requests to fetch all names
export async function GET() {
  try {
    const users = await db.user.findMany(); // Fetch all names from the database
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch names" },
      { status: 500 }
    );
  }
}
