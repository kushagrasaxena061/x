// app/api/names/route.ts
import { NextResponse } from "next/server";
import { db } from "@repo/common/config";

// Handle GET requests to fetch all names

// Handle POST requests to add a new name
export async function POST(req: Request) {
  try {
    const { name } = await req.json(); // Extract the name from the request body

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    // Save the new name to the database
    const newUser = await db.user.create({
      data: { name },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create name" },
      { status: 500 }
    );
  }
}
