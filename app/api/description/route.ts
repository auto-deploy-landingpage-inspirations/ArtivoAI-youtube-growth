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
    "Generate a compelling YouTube video description for a video on [specific topic/niche]. Craft a well-structured description that includes key information, keywords, and a call-to-action. Integrate relevant emoji to add personality and engage the audience. Ensure that the response is concise, informative, and encourages viewer interaction. Here's an example format for the AI responses: 1.Start with a captivating opening line to grab attention and Mention the core topic or theme of the video. 2.Provide a brief overview of what viewers can expect and Include any special features or highlights. 3.Integrate relevant keywords naturally for SEO optimization and Consider the language your target audience might use when searching. 4.Encourage viewers to like, subscribe, and share and Prompt them to leave comments or ask questions. 5.Add emoji to convey emotions, enhance readability, and inject personality and Match emoji with the content of the description. 6.Summarize the main points and Express gratitude and anticipation for viewer engagement.",
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
    if(!isPro){
    await incrementApiLimit();
    }
    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("[DESCRIPTION_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
