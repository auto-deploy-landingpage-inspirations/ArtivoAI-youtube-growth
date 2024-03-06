import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { useAuth } from "@clerk/nextjs";

const LandingTools = () => {
  const { isSignedIn } = useAuth();
  return (
    <div id="tools" className="w-full bg-zinc-50 py-20">
      <h1 className="text-5xl px-[4vw] font-light text-zinc-900">
        AI Empowerment Suite:{" "}
        <span className="underline decoration-red-500 font-semibold">
          Elevate
        </span>{" "}
        Your YouTube Presence with{" "}
        <span className="underline decoration-purple-500 font-semibold">
          Intelligent Tools
        </span>{" "}
        for Unmatched{" "}
        <span className="underline decoration-yellow-500 font-semibold">
          Content Creation and Optimization.
        </span>
      </h1>
      <div className="border-t border-zinc-200 mt-12 pt-12 gap-4 px-[4vw] flex max-md:flex-col">
        <div className="p-4 w-1/2 max-md:w-full flex flex-col gap-6 bg-zinc-200 border border-zinc-300 rounded-2xl">
          <div className=" max-md:w-full rounded-xl overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <Image
                fill
                alt="image"
                src="/script-mockup.png"
                className="rounded-xl max-md:rounded-lg"
              />
            </AspectRatio>
          </div>
          <div className="flex flex-col text-left gap-4 max-md:w-full">
            <div className="lg:text-xl md:text-lg max-md:text-xl font-extrabold text-zinc-900">
              Unleashing Creativity with AI-Driven Script Writing Excellence
            </div>
            <p className=" max-lg:text-xs lg:text-sm font-light text-zinc-700">
              Experience the future of scriptwriting with artivoAI, your
              indispensable ally in crafting compelling narratives effortlessly.
              Elevate your storytelling game as our cutting-edge AI tool assists
              you in generating dynamic scripts, ensuring a seamless blend of
              creativity and efficiency. Unleash the power of innovation and
              transform your ideas into captivating stories with artivoAI –
              where your vision meets the brilliance of artificial intelligence.
            </p>
          </div>
        </div>

        <div className="p-4 w-1/2 max-md:w-full flex flex-col gap-6 bg-zinc-200 border border-zinc-300 rounded-2xl">
          <div className=" max-md:w-full rounded-xl overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <Image
                fill
                alt="image"
                src="/mentor-mockup.png"
                className="rounded-xl max-md:rounded-lg"
              />
            </AspectRatio>
          </div>
          <div className="flex flex-col gap-4 text-left max-md:w-full">
            <h1 className="text-xl md:text-lg lg:text-xl font-bold text-zinc-900 gap-3 flex">
              Introducing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                AI Mentor
              </span>
              <Badge className="bg-gradient-to-r from-red-500 to-orange-500 border-0">
                NEW
              </Badge>
            </h1>
            <p className="text-xs lg:text-sm font-light text-zinc-700">
              Unlock 24/7 Guidance from Your AI Mentor: Elevate Your Insights
              and Support Whenever You Need it Most.
            </p>
            <Link href={isSignedIn ? "/mentor" : "/sign-up"}>
              <Button
                variant={"ghost"}
                className="text-zinc-900 border-zinc-500 rounded-2xl font-bold"
              >
                Start Chatting Now.
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-4 gap-4 px-[4vw] flex max-md:flex-col">
        <div className="p-4 w-1/2 max-md:w-full flex flex-col gap-6 bg-zinc-200 border border-zinc-300 rounded-2xl">
          <div className=" max-md:w-full rounded-xl overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <Image
                fill
                alt="image"
                src="/title-mockup.png"
                className="rounded-xl max-md:rounded-lg"
              />
            </AspectRatio>
          </div>
          <div className="flex flex-col text-left gap-4 max-md:w-full">
            <div className="lg:text-xl md:text-lg max-md:text-xl font-extrabold text-zinc-900">
              Unleash the Power of AI for Captivating and SEO-Optimized Video
              Titles
            </div>
            <p className=" max-lg:text-xs lg:text-sm font-light text-zinc-700">
              Our cutting-edge AI tool designed to effortlessly generate
              compelling and search-friendly titles. Save time, boost
              discoverability, and captivate your audience with titles that
              stand out in the competitive world of YouTube. Let AI innovation
              transform your video strategy, making every title a masterpiece.
            </p>
          </div>
        </div>

        <div className="p-4 w-1/2 max-md:w-full flex flex-col gap-6 bg-zinc-200 border border-zinc-300 rounded-2xl">
          <div className=" max-md:w-full rounded-xl overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <Image
                fill
                alt="image"
                src="/music-mockup.png"
                className="rounded-xl max-md:rounded-lg"
              />
            </AspectRatio>
          </div>
          <div className="flex flex-col gap-4 text-left max-md:w-full">
            <h1 className="text-xl md:text-lg lg:text-xl font-bold text-zinc-900 gap-3 flex">
              Elevate Your Videos with Custom-Crafted Background Music
            </h1>
            <p className="text-xs lg:text-sm font-light text-zinc-700">
              Innovative AI tool designed to seamlessly generate personalized
              background music for your videos. Harness the power of AI-driven
              composition to create the perfect musical backdrop, enhancing the
              emotional impact and overall quality of your content. Say goodbye
              to generic tunes and immerse your audience in a world of
              tailor-made soundscapes that amplify the essence of your videos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingTools;
