import { NextRequest, NextResponse } from "next/server";
import { getOpenAIClient } from "@/lib/ai";

export async function POST(request: NextRequest) {
  const { mode = "Research", question } = await request.json();

  if (!question) {
    return NextResponse.json({ error: "question is required" }, { status: 400 });
  }

  const client = getOpenAIClient();
  if (!client) {
    return NextResponse.json({
      mode,
      answer: `Fallback assistant (${mode} mode): ${question}. Configure OPENAI_API_KEY for full AI responses.`
    });
  }

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: `You are the IAE AI Research Assistant in ${mode} mode.` },
      { role: "user", content: question }
    ]
  });

  return NextResponse.json({ mode, answer: response.choices[0].message.content });
}
