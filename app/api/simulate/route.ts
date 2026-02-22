import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { runIAESimulation } from "@/lib/simulator";

const schema = z.object({
  informationScore: z.number().min(0).max(100),
  actionScore: z.number().min(0).max(100),
  emotionalStability: z.number().min(0).max(100),
  timeConstraint: z.number().min(0).max(100)
});

export async function POST(request: NextRequest) {
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  return NextResponse.json(runIAESimulation(parsed.data));
}
