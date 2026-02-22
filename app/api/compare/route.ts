import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { COMPARE_TEMPLATE } from "@/lib/prompts";
import { getOpenAIClient } from "@/lib/ai";

const schema = z.object({ theoryName: z.string().min(2) });

export async function POST(request: NextRequest) {
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const client = getOpenAIClient();
  if (!client) {
    return NextResponse.json({
      theoryName: parsed.data.theoryName,
      similarities: ["Both model cause-effect logic", "Both can be expressed as state transitions"],
      differences: ["IAE is optimization-centric", `${parsed.data.theoryName} may be domain-specific`],
      strengths: ["Cross-domain synthesis", "Actionable framework"],
      weaknesses: ["Requires structured data inputs", "Needs longitudinal validation"],
      mathematicalCompatibility: "Moderate to high",
      realLifeApplicability: "High for decision-making and behavior design"
    });
  }

  const prompt = COMPARE_TEMPLATE.replace("{THEORY_NAME}", parsed.data.theoryName);
  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0.2,
    messages: [
      { role: "system", content: "You are an analytical research assistant. Return strict JSON." },
      { role: "user", content: prompt }
    ],
    response_format: { type: "json_object" }
  });

  return NextResponse.json(JSON.parse(completion.choices[0].message.content || "{}"));
}
