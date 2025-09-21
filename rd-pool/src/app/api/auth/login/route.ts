import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // later
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    // Example stub: later we’ll check DB + bcrypt
    // const user = await prisma.user.findUnique({ where: { email } });
    // if (!user || !(await bcrypt.compare(password, user.password))) {
    //   return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    // }

    // Generate JWT/session (stubbed for now)
    // const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: "1h" });

    return NextResponse.json({
      message: "Login successful (stubbed, DB not yet connected).",
      token: "fake-jwt-token",
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
