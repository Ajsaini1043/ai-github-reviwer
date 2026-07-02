import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(req: Request) {
  try {
    const { repository } = await req.json();

    const completion = await openai.chat.completions.create({
      model: "openai/gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `
Return ONLY valid JSON.

{
  "summary": "",
  "strengths": [],
  "weaknesses": [],
  "suggestions": [],
  "rating": 0
}

Analyze this GitHub repository:

Repository Name: ${repository.name}
Description: ${repository.description}
Language: ${repository.language}
Stars: ${repository.stargazers_count}
Forks: ${repository.forks_count}

Do not write markdown.
Do not use \`\`\`json.
Return only the JSON object.
`,
        },
      ],
    });

    return NextResponse.json({
      review: completion.choices[0].message.content,
    });
  } catch (error: any) {
    console.error("OPENROUTER ERROR:", error);

    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}