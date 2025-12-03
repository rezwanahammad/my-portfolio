import { NextResponse } from "next/server";
import connectToDatabase from "../../../../../lib/mongodb";
import { validateAdminPassword } from "../../../../../lib/auth";

// Admin login endpoint
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password } = body;

    if (!password) {
      return NextResponse.json({ error: "Password required" }, { status: 400 });
    }

    if (!validateAdminPassword(password)) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Return the password as token (simple auth for demo)
    // In production, generate a proper JWT token
    return NextResponse.json({ 
      success: true, 
      token: password,
      message: "Login successful" 
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
