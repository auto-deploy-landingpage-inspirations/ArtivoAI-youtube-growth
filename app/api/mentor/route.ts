import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

const instructionMessage: OpenAI.ChatCompletionMessage = {
  role: "assistant",
  content:
    "Provide guidance and support to a YouTuber seeking assistance in [specific aspect, e.g., content creation, audience engagement, SEO optimization, etc.]. Craft a response that includes actionable advice, tips, and encouragement. Incorporate relevant emoji to enhance communication and maintain a friendly tone. Ensure that the response is well-structured and easy to follow. Here's an example format for the AI responses: 1.Greet the YouTuber warmly and Express understanding of their concern. 2.Acknowledge the specific aspect they need help with. 3.Provide actionable advice and tips related to their concern and Break down complex concepts into simple steps. 4.Offer words of encouragement and motivation and Highlight their strengths and achievements. 5.Use relevant emoji to convey emotions and add a personal touch. 6.Summarize key points and Encourage them to reach out for further assistance.",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", {
        status: 500,
      });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse(
        "Free trial has expired. Please upgrade to pro.",
        { status: 403 }
      );
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });
    if (!isPro) {
      await incrementApiLimit();
    }
    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("[COACH_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
