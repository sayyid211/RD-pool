import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, password, type } = await req.json();

    if (!name || !email || !password || !type) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if user already exists
    const existing = await prisma.actor.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new actor (user/org)
    const actor = await prisma.actor.create({
      data: {
        name,
        email,
        password: hashedPassword,
        type, // should be "INDIVIDUAL" or "ORGANIZATION"
      },
    });

    return NextResponse.json({ message: "User registered successfully", actor }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
