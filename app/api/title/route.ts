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
    "Generate an attention-grabbing title for a YouTube video on [specific topic/niche]. Craft a title that is both compelling and informative, incorporating keywords for SEO. Integrate relevant emoji to add visual appeal and convey emotions. Ensure that the response is concise and encourages viewers to click and watch. Here's an example format for the AI responses: 1.Incorporate the main topic or keywords related to the video and Ensure the title clearly reflects the content. 2.Include an attention-grabbing hook or question to pique curiosity and Make the viewer feel intrigued or excited. 3.Add emoji to complement the tone and subject of the video and Use emoji strategically to emphasize key points or create visual interest. 4.Encourage viewers to click by incorporating a subtle call-to-action and Create a sense of urgency or exclusivity when appropriate.",
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
    console.log("[TITLE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
