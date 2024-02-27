import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "@clerk/nextjs";
import { Instagram, Twitter, Youtube } from "lucide-react";

const LandingHero = () => {
  const { isSignedIn } = useAuth();
  return (
    <div
      id="top"
      className="w-full h-screen text-zinc-100 max-md:pt-28 pt-48 flex"
    >
      <div className="w-full relative">
        <div className="space-y-5 px-[4vw]">
          <h1 className="text-4xl md:text-4xl lg:text-5xl min-[1440px]:text-7xl font-extrabold uppercase">
            Crafted to enhance
            <br />
            your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-500">
              YouTube
            </span>{" "}
            <TypewriterComponent
              options={{
                strings: ["viewership.", "videos.", "scripts.", "presence."],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <h1 className="text-sm md:text-xl text-zinc-400 font-semibold">
            Grab free tips and friendly advice to nurture your{" "}
            <br className="max-md:hidden" /> YouTube channel's growth with a
            smile.
          </h1>
        </div>
        <div className="h-[20vh] w-[4vw] max-md:hidden bg-red-500 absolute inset-y-0 right-0 flex flex-col gap-4 justify-center items-center rounded-l-xl">
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <div className="rotate-90 text-nowrap font-semibold text-xl max-md:text-lg">
              Get Started
            </div>
          </Link>
        </div>
        <div className="border-t border-zinc-800 mt-40 max-md:mt-28 flex max-md:flex-col max-md:gap-4 justify-between items-center px-[4vw] py-5 font-medium text-zinc-200">
          <h1>Create content using AI 10x faster.</h1>
          <h1>No credit card required.</h1>
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button
              variant="ghost"
              className="md:text-base rounded-2xl font-bold"
            >
              <FcGoogle className="mr-3 h-7 w-7 bg-zinc-900 rounded-full" />{" "}
              Sign up with your Google account
            </Button>
          </Link>
        </div>
        <div className="flex justify-center items-center text-zinc-700 mt-4">
          Scroll down
        </div>

        {/* <div className="space-y-5">
            <div className="text-sm md:text-base font-medium text-zinc-500">
              Create content using AI 10x faster.
            </div>
            <div className="max-md:flex max-md:flex-col max-md:gap-4">
              <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                <Button
                  variant="ghost"
                  className="p-4 md:hidden text-zinc-100 hover:text-zinc-800 rounded-2xl font-semibold"
                >
                  Go to Dashboard
                </Button>
              </Link>
              <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                <Button
                  variant="premium"
                  className="md:text-base p-7 md:p-6 from-zinc-200 to-zinc-200 text-zinc-900 rounded-2xl font-bold"
                >
                  <FcGoogle className="mr-3 h-7 w-7" /> Sign up with your Google
                  account
                </Button>
              </Link>
            </div>
            <div className="text-zinc-500 text-xs md:text-sm font-medium">
              No credit card required.
            </div>
          </div> */}
      </div>
      {/* <div className="mt-6 rounded-xl max-lg:hidden md:w-[50vw]">
          <TextRevealCard text="1 Subscriber" revealText="1M Subscribers">
            <TextRevealCardTitle>Might Be Yours !</TextRevealCardTitle>
            <TextRevealCardDescription>
              Sometimes, you just need to see it.
              <br /> Hover to see.
            </TextRevealCardDescription>
          </TextRevealCard>
          <AspectRatio ratio={16 / 9}>
            <video
              autoPlay
              loop
              muted
              className="rounded-2xl max-md:rounded-xl"
            >
              <source src="/Artivoai.mp4" />
            </video>
          </AspectRatio>
        </div> */}
    </div>
  );
};

export default LandingHero;