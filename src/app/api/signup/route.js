import { NextResponse } from "next/server";
import clientPromise from '../../../../lib/mongodb';

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("User");

   
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

   
    await db.collection("users").insertOne({ name, email, password });

    return NextResponse.json({ message: "Signup successful!" });
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
