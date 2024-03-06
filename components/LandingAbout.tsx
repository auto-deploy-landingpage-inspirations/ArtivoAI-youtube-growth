import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

const LandingAbout = () => {
  return (
    <div id="about" className="w-full bg-zinc-50 text-zinc-900 py-20">
      <h1 className="text-5xl font-light px-[4vw]">
        Unlock effortless{" "}
        <span className="underline decoration-sky-500 font-semibold">
          YouTube growth
        </span>{" "}
        with{" "}
        <span className="underline decoration-red-500 font-semibold">
          artivoAI
        </span>
        . Access the strategies and talent powering the biggest creators and{" "}
        <span className="underline decoration-yellow-500 font-semibold">
          achieve
        </span>{" "}
        your YouTube goals,{" "}
        <span className="underline decoration-indigo-500 font-semibold">
          faster.
        </span>
      </h1>
      <div className="mt-12 pt-12 px-[4vw] flex max-md:flex-col gap-4 border-t border-zinc-200">
        <div className="bg-zinc-200 w-1/3 space-y-4 max-md:w-full rounded-2xl p-4 border border-zinc-300">
          <h1 className="font-bold text-xl">
            Optimize the Organic Visibility of Your Video
          </h1>
          <h1 className="font-light">
            Maximize YouTube visibility by creating engaging content and
            strategically employing researched keywords in titles, descriptions,
            tags, etc.
          </h1>
        </div>
        <div className="bg-zinc-200 w-1/3 space-y-4 max-md:w-full rounded-2xl p-4 border border-zinc-300">
          <h1 className="font-bold text-xl">Relevant Recommendations</h1>
          <h1 className="font-light">
            Receive personalized guidance from your AI Mentor through AI-driven
            recommendations.
          </h1>
        </div>
        <div className="bg-zinc-200 w-1/3 space-y-4 max-md:w-full rounded-2xl p-4 border border-zinc-300">
          <h1 className="font-bold text-xl">AI-Generated Video Titles</h1>
          <h1 className="font-light">
            Leverage our AI tools to automatically generate catchy and
            SEO-friendly video titles, saving time and optimizing content
            discoverability.
          </h1>
        </div>
      </div>
      <div className="pt-4 px-[4vw] flex max-md:flex-col gap-4">
        <div className="bg-zinc-200 w-1/2 space-y-4 max-md:w-full rounded-2xl p-4 border border-zinc-300">
          <h1 className="font-bold text-xl">Continuous Learning and Updates</h1>
          <h1 className="font-light">
            Benefit from a platform that evolves with the latest AI
            advancements, ensuring you always have access to cutting-edge tools
            and features for sustained growth on YouTube.
          </h1>
        </div>
        <div className="bg-zinc-200 w-1/2 space-y-4 max-md:w-full rounded-2xl p-4 border border-zinc-300">
          <h1 className="font-bold text-xl">Save time and reduce errors</h1>
          <h1 className="font-light">
            Get rid of manually doing everything, and get an accurate output you
            want.
          </h1>
        </div>
      </div>
      <div className="mt-12 bg-red-300 px-[4vw] p-8 flex max-md:flex-col gap-4">
        <div className="w-3/4 max-md:w-full p-10 bg-red-100 flex flex-col justify-center rounded-3xl">
          <h1 className="text-5xl font-bold font-serif text-justify">
          “It’s easier to get 10M views on one video than 100K views on 100 videos.”
          </h1>
          <h1 className="text-right mt-8 font-bold">- Jimmy (Mr. Beast)</h1>
        </div>
        <div className="w-1/3 max-md:w-full">
        <AspectRatio ratio={5/4}>
        <Image fill alt="Dashboard Image" src="/mrbeast.png" className="rounded-3xl"/>
        </AspectRatio>
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;
