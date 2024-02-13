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
    "Compose an engaging script for a YouTube video on [specific topic/niche]. Craft a well-structured script that includes an attention-grabbing introduction, main content with key points, transitions, and a compelling conclusion. Integrate relevant emoji to convey emotions and add a conversational tone. Ensure that the response is coherent, concise, and encourages audience retention. Here's an example format for the AI responses: 1.Start with a captivating hook or question to grab the audience's attention and Briefly introduce the main topic of the video. 2.Break down the content into key points or sections and Use transitions for smooth flow between points and Include facts, anecdotes, or examples to enhance engagement. 3.Suggest moments for visuals, graphics, or B-roll footage and Indicate when to emphasize certain points with on-screen elements. 4.Encourage audience interaction, such as asking questions or sharing opinions and Prompt viewers to like, subscribe, and click the notification bell. 5.Use emoji strategically to match the tone of the script and convey emotions and Place emoji at points where they can enhance the script's expressiveness. 6.Summarize the main takeaways and End with a strong call-to-action or a teaser for the next video.",
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
    console.log("[SCRIPT_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
