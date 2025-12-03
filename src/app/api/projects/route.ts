import { NextResponse } from "next/server";
import connectToDatabase from "../../../../lib/mongodb";

export async function GET() {
  try {
    const client = await connectToDatabase();
    const db = client.db();
    const projects = await db.collection("projects").find({}).toArray();

    // transform _id to string for JSON
    const sanitized = projects.map((p) => ({ ...p, _id: p._id?.toString?.() }));

    return NextResponse.json({ projects: sanitized });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}
