"use client";

import { Button } from "@/components/ui/button";
import { Hash, ListVideo, Loader, MessageCircleMore, MusicIcon, ScrollText, Tv2, WholeWord } from "lucide-react";
import Link from "next/link";

const ToolsPage = () => {
  return (
    <div className="flex flex-wrap max-md:flex-col gap-6 p-6">
      <div className="bg-zinc-800  rounded-2xl p-6">
        <h1 className="text-zinc-300 text-2xl font-bold pb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700">
            Script
          </span>{" "}
          Generator.
        </h1>
        <Link href={"/conversation"}>
          <Button
            variant={"premium"}
            className="gap-3 bg-gradient-to-r from-rose-500 to-rose-700 rounded-2xl "
          >
            Generate Script <ScrollText className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="bg-zinc-800  rounded-2xl p-6">
        <h1 className="text-zinc-300 text-2xl font-bold pb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
            Title
          </span>{" "}
          Generator.
        </h1>
        <Link href={"/title"}>
          <Button
            variant={"premium"}
            className="gap-3 bg-gradient-to-r from-red-500 to-red-700 rounded-2xl "
          >
            Generate Title <Tv2 className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="bg-zinc-800  rounded-2xl p-6">
        <h1 className="text-zinc-300 text-2xl font-bold pb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
            Tags
          </span>{" "}
          Generator.
        </h1>
        <Link href={"/tags"}>
          <Button
            variant={"premium"}
            className="gap-3 bg-gradient-to-r from-orange-500 to-orange-700 rounded-2xl "
          >
            Generate Tags <Hash className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="bg-zinc-800  rounded-2xl p-6">
        <h1 className="text-zinc-300 text-2xl font-bold pb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-700">
            Description
          </span>{" "}
          Generator.
        </h1>
        <Link href={"/description"}>
          <Button
            variant={"premium"}
            className="gap-3 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-2xl "
          >
            Generate Description <ListVideo className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="bg-zinc-800  rounded-2xl p-6">
        <h1 className="text-zinc-300 text-2xl font-bold pb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">
            Music
          </span>{" "}
          Generator.
        </h1>
        <Link href={"/music"}>
          <Button
            variant={"premium"}
            className="gap-3 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-2xl "
          >
            Generate Music <MusicIcon className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="bg-zinc-800  rounded-2xl p-6">
        <h1 className="text-zinc-300 text-2xl font-bold pb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">
            Name
          </span>{" "}
          Generator.
        </h1>
        <Link href={"/name"}>
          <Button
            variant={"premium"}
            className="gap-3 bg-gradient-to-r from-amber-500 to-amber-700 rounded-2xl "
          >
            Generate Name <WholeWord className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div>
      <Link href={"/dashboard"}>
            <Button
              variant={"ghost"}
              className="gap-3 border-0 cursor-wait"
            >
              More Comming Soon <Loader className="h-4 w-4" />
            </Button>
          </Link>
      </div>
    </div>
  );
};

export default ToolsPage;
