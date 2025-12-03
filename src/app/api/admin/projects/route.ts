import { NextResponse } from "next/server";
import connectToDatabase from "../../../../../lib/mongodb";
import { getAdminTokenFromHeaders, validateAdminToken } from "../../../../../lib/auth";
import { ObjectId } from "mongodb";

// Create new project
export async function POST(request: Request) {
  try {
    const token = getAdminTokenFromHeaders(request.headers);
    if (!token || !validateAdminToken(token)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { title, description, image, techs, href } = body;

    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const client = await connectToDatabase();
    const db = client.db();
    const projects = db.collection("projects");

    const newProject = {
      title,
      description: description || "",
      image: image || "/placeholder.png",
      techs: techs || [],
      href: href || "#",
      createdAt: new Date(),
    };

    const result = await projects.insertOne(newProject);

    return NextResponse.json({ 
      success: true, 
      project: { ...newProject, _id: result.insertedId.toString() } 
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}

// Update existing project
export async function PUT(request: Request) {
  try {
    const token = getAdminTokenFromHeaders(request.headers);
    if (!token || !validateAdminToken(token)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { _id, title, description, image, techs, href } = body;

    if (!_id) {
      return NextResponse.json({ error: "Project ID is required" }, { status: 400 });
    }

    const client = await connectToDatabase();
    const db = client.db();
    const projects = db.collection("projects");

    const updateData: any = {};
    if (title !== undefined) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    if (image !== undefined) updateData.image = image;
    if (techs !== undefined) updateData.techs = techs;
    if (href !== undefined) updateData.href = href;
    updateData.updatedAt = new Date();

    const result = await projects.updateOne(
      { _id: new ObjectId(_id) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Project updated" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
  }
}

// Delete project
export async function DELETE(request: Request) {
  try {
    const token = getAdminTokenFromHeaders(request.headers);
    if (!token || !validateAdminToken(token)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Project ID is required" }, { status: 400 });
    }

    const client = await connectToDatabase();
    const db = client.db();
    const projects = db.collection("projects");

    const result = await projects.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Project deleted" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}
