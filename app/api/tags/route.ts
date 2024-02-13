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
    "Generate relevant and effective tags for a YouTube video on [specific topic/niche]. Craft a list of tags that enhance SEO by incorporating specific keywords, phrases, and variations. Integrate relevant emoji to add visual appeal and convey the tone or theme of the video. Ensure that the response includes a mix of broad and niche-specific tags to maximize discoverability. Here's an example format for the AI responses: 1.Include the main keywords related to the video's content and Ensure the primary focus of the video is reflected in the tags. 2.Add variations of keywords and related phrases to capture different search queries and Consider how users might phrase their searches. 3.Incorporate tags specific to the niche or subtopics covered in the video and Include terms that resonate with the target audience.",
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
      return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });
    if (!isPro){
    await incrementApiLimit();
    }
    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("[TAGS_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
