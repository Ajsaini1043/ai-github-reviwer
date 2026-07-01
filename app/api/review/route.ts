import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { repository } = await req.json();

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "user",
                    content: `
Analyze this GitHub repository:

Repository Name: ${repository.name}
Description: ${repository.description}
Language: ${repository.language}
Stars: ${repository.stargazers_count}
Forks: ${repository.forks_count}

Provide:
1. Project Summary
2. Strengths
3. Weaknesses
4. Suggestions
5. Overall Rating out of 10
          `,
                },
            ],
        });

        return NextResponse.json({
            review: completion.choices[0].message.content,
        });
    } catch (error: any) {
        console.error("OPENAI ERROR:", error.message);

        return NextResponse.json(
            {
                error: error.message,
            },
            { status: 500 }
        );
    }
}