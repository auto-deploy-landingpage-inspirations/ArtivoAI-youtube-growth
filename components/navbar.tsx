import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import Link from "next/link";
import { HelpCircle, Settings } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "./ui/button";
import AudioPlayer from "./AudioPlayer";

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="flex items-center p-4">
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <div className="flex w-full gap-4 justify-end items-center">
        <AudioPlayer src="/bg-music.mp3" />
        <Popover>
          <PopoverTrigger>
            <HelpCircle className="text-zinc-400 h-5 w-5 cursor-help" />
          </PopoverTrigger>
          <PopoverContent className="bg-zinc-800 flex flex-col gap-4 rounded-2xl border-0 text-zinc-200 w-auto">
          <Link href={"/contact-us"}>
            <Button variant={"ghost"} className="rounded-2xl">
              Contact Us
            </Button>
            </Link>
            <Link href={"/terms-of-service"}>
            <Button variant={"ghost"} className="rounded-2xl">
              Terms of Service
            </Button>
            </Link>
          </PopoverContent>
        </Popover>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link href={"/settings"}>
                <Settings className="text-zinc-400 h-5 w-5" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Settings</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
