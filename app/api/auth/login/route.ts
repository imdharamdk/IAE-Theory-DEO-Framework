import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  role: z.enum(["Founder", "Researcher", "Learner", "Observer"])
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid credentials payload" }, { status: 400 });
  }

  const token = jwt.sign(parsed.data, process.env.JWT_SECRET || "dev-secret", { expiresIn: "12h" });
  return NextResponse.json({ token, user: parsed.data });
}
