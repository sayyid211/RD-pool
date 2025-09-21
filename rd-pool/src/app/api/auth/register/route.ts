import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // we'll set this up later
// import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, name } = body;

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    // 🔒 hash password before saving
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Save to DB (stub for now)
    // const user = await prisma.user.create({
    //   data: { email, name, password: hashedPassword },
    // });

    return NextResponse.json({
      message: "User registered successfully (stubbed, DB not yet connected).",
      user: { email, name },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
