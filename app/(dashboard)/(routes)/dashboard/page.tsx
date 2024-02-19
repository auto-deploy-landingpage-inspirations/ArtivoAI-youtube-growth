"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ExternalLink,
  Hash,
  Lightbulb,
  ListVideo,
  Loader,
  MessageCircleMore,
  MusicIcon,
  ScrollText,
  Tv2,
  WholeWord,
} from "lucide-react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-6 font-bold p-6">
      <div className="flex max-md:flex-col gap-6">
        <div className="bg-zinc-900  rounded-2xl p-6 shadow-2xl shadow-orange-950">
          <h1 className="text-zinc-300 text-2xl font-bold pb-6">
            Chat with your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              AI Mentor.
            </span>
          </h1>
          <Link href={"/mentor"}>
            <Button
              variant={"premium"}
              className="gap-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl "
            >
              Chat Now <MessageCircleMore className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="bg-zinc-900  rounded-2xl p-6">
          <h1 className="text-zinc-300 text-xl font-bold pb-6">
            Check our Prompt Library.
          </h1>
          <Link href={"/prompt"}>
            <Button
              variant={"ghost"}
              className="gap-3 rounded-2xl cursor-alias"
            >
              Check now <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="bg-zinc-900  rounded-2xl p-6 shadow-2xl shadow-purple-950">
          <h1 className="text-zinc-300 text-xl font-bold pb-6">
            Brainstorm exciting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
              content ideas
            </span>{" "}
            for your next video.
          </h1>

          <Link href={"/ideas"}>
            <Button
              variant={"premium"}
              className="gap-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl"
            >
              Get Ideas <Lightbulb className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="bg-zinc-900 rounded-2xl p-6">
        <h1 className="text-zinc-300 max-md:text-center text-2xl font-bold pb-6">
          AI Tools
        </h1>
        <div className="flex flex-wrap max-md:justify-center gap-6">
          <Link href={"/conversation"}>
            <Button
              variant={"premium"}
              className="gap-3 bg-gradient-to-r from-rose-500 to-rose-700 rounded-2xl"
            >
              Script Generator <ScrollText className="h-4 w-4" />
            </Button>
          </Link>
          <Link href={"/title"}>
            <Button
              variant={"premium"}
              className="gap-3 bg-gradient-to-r from-red-500 to-red-700 rounded-2xl"
            >
              Title Generator <Tv2 className="h-4 w-4" />
            </Button>
          </Link>
          <Link href={"/tags"}>
            <Button
              variant={"premium"}
              className="gap-3 bg-gradient-to-r from-orange-500 to-orange-700 rounded-2xl"
            >
              Tags Generator <Hash className="h-4 w-4" />
            </Button>
          </Link>
          <Link href={"/description"}>
            <Button
              variant={"premium"}
              className="gap-3 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-2xl"
            >
              Description Generator <ListVideo className="h-4 w-4" />
            </Button>
          </Link>
          <Link href={"/music"}>
            <Button
              variant={"premium"}
              className="gap-3 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-2xl"
            >
              Music Generator <MusicIcon className="h-4 w-4" />
            </Button>
          </Link>
          <Link href={"/name"}>
            <Button
              variant={"premium"}
              className="gap-3 bg-gradient-to-r from-amber-500 to-amber-700 rounded-2xl"
            >
              Name Generator <WholeWord className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative rounded-2xl cursor-cell">
        <AspectRatio ratio={40 / 9}>
          <Image
            fill
            alt="image"
            src={"/coming-soon-bg.png"}
            className="rounded-2xl"
          />
        </AspectRatio>
      </div>
    </div>
  );
};

export default DashboardPage;
