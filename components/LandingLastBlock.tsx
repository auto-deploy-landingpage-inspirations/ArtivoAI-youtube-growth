import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "@clerk/nextjs";

const LandingLastBlock = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="w-full py-32 max-md:py-12">
      <div className="text-left space-y-10 px-[4vw]">
        <h1 className="font-bold text-zinc-100 min-[1440px]:text-7xl lg:text-4xl text-3xl">
          Revitalize Your YouTube <br /> Presence Now
        </h1>
        <h1 className="min-[1440px]:text-lg md:text-sm text-xs text-zinc-400 font-light">
          Become part of the thriving community leveraging ArtivoAI for channel
          <br className="max-md:hidden" />
          expansion Connect with the multitude of content creators utilizing
          ArtivoAI <br className="max-md:hidden" /> to elevate their channels
          and achieve substantial growth.
        </h1>
        <div>
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button
              variant="ghost"
              className="md:text-base rounded-2xl text-zinc-100 font-bold"
            >
              <FcGoogle className="mr-3 h-7 w-7 bg-zinc-900 rounded-full" />{" "}
              Sign up with your Google account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingLastBlock;
