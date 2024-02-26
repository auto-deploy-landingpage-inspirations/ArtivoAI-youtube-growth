import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { useAuth } from "@clerk/nextjs";

const LandingTools = () => {
    const { isSignedIn } = useAuth();
  return (
    <div id="tools" className="w-full py-20">
      <h1 className="text-5xl px-[4vw] font-semibold text-zinc-100">AI Tools</h1>
      <div className="border-t border-zinc-800 mt-12">
      <div className="gap-4 px-[4vw] mt-12 flex max-md:flex-col">
        <div className="p-4 w-1/2 max-md:w-full flex flex-col gap-6 bg-zinc-800 border-0 rounded-2xl">
          <div className=" max-md:w-full border border-zinc-900 rounded-2xl overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <Image
                fill
                alt="image"
                src="/dashboard.png"
                className="rounded-2xl max-md:rounded-lg"
              />
            </AspectRatio>
          </div>
          <div className="flex flex-col text-left gap-4 max-md:w-full">
            <div className="lg:text-xl md:text-lg max-md:text-xl font-extrabold bg-zinc-100 bg-clip-text text-transparent">
              Optimize Your YouTube Visibility with AI
            </div>
            <p className=" max-lg:text-xs lg:text-sm font-bold text-zinc-100">
              Unlock effective keyword strategies, compelling titles, and
              engaging descriptions to enhance your views and attract more
              subscribers organically.
            </p>
            <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
              <Button
                variant={"ghost"}
                className="text-zinc-100 border-red-500 rounded-2xl font-bold"
              >
                Start Free Today.
              </Button>
            </Link>
          </div>
        </div>

        <div className="p-4 w-1/2 max-md:w-full flex flex-col gap-6 bg-zinc-800 border-0 rounded-2xl">
          <div className=" max-md:w-full border border-zinc-900 rounded-2xl overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <Image
                fill
                alt="image"
                src="/mentor.png"
                className="rounded-2xl max-md:rounded-lg"
              />
            </AspectRatio>
          </div>
          <div className="flex flex-col gap-4 text-left max-md:w-full">
            <h1 className="text-xl md:text-lg lg:text-xl font-bold text-zinc-100 gap-3 flex">
              Introducing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                AI Mentor
              </span>
              <Badge className="bg-gradient-to-r from-red-500 to-orange-500 border-0">
                NEW
              </Badge>
            </h1>
            <p className="text-xs lg:text-sm font-bold text-zinc-100">
              Access your round-the-clock AI Mentor Gain insights and support
              whenever you need.
            </p>
            <Link href={isSignedIn ? "/mentor" : "/sign-up"}>
              <Button
                variant={"ghost"}
                className="text-zinc-100 border-red-500 rounded-2xl font-bold"
              >
                Start Chatting Now.
              </Button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LandingTools;
