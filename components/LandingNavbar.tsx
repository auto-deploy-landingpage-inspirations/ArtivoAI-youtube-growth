import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import { useAuth } from "@clerk/nextjs";

const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({ behavior: "smooth", inline: "nearest" });
  };
  return (
    <nav className="w-full fixed z-10 px-[4vw] py-3 bg-zinc-50 border-0 shadow-sm flex items-center justify-between">
      <div
        onClick={() => scrolltoHash("top")}
        className="flex items-center cursor-pointer"
      >
        {/* <div className="relative h-7 w-7 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div> */}
        <h1 className={cn("text-2xl font-bold text-zinc-950")}>
          artivo<span className="font-bold text-red-500">AI.</span>
        </h1>
      </div>
      <div className="flex gap-8 max-lg:hidden text-zinc-900 font-semibold transition-all">
        <div
            onClick={() => scrolltoHash("about")}
            className="text-sm cursor-pointer rounded-xl p-2 hover:bg-zinc-200"
          >
            About
          </div>
        <div
          onClick={() => scrolltoHash("tools")}
          className="text-sm cursor-pointer rounded-xl p-2 hover:bg-zinc-200"
        >
          AI Tools
        </div>
        <div
          onClick={() => scrolltoHash("faq")}
          className="text-sm cursor-pointer rounded-xl p-2 hover:bg-zinc-200"
        >
          FAQs
        </div>
        <Link href={"/pricing"}>
          <div className="text-sm cursor-pointer rounded-xl p-2 hover:bg-zinc-200">
            Pricing
          </div>
        </Link>
        <Link href={"/thumbnail-editor"}>
          <div className="text-sm cursor-pointer rounded-xl p-2 hover:bg-zinc-200">
            Thumbnail Editor
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
          <Button
            variant={"ghost"}
            className="text-sm font-medium text-zinc-900 border-0 bg-zinc-200 rounded-xl max-lg:hidden"
          >
            Dashboard
          </Button>
        </Link>
        <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
          <Button
            variant="ghost"
            className="text-sm rounded-xl text-zinc-100 border-0 bg-red-500 max-lg:hidden"
          >
            LOGIN
          </Button>
        </Link>
        <Sheet>
          <SheetTrigger className="lg:hidden text-zinc-900">
            <Menu />
          </SheetTrigger>
          <SheetContent className="h-[75vh] bg-zinc-100 border-l border-y border-zinc-300 rounded-l-2xl w-auto pt-12">
            <SheetClose className="flex flex-col items-center text-zinc-900 font-semibold gap-4">
              <div
                onClick={() => scrolltoHash("about")}
                className="text-sm w-full cursor-pointer rounded-xl p-3 bg-zinc-200"
              >
                About
              </div>
              <div
                onClick={() => scrolltoHash("tools")}
                className="text-sm w-full cursor-pointer rounded-xl p-3 bg-zinc-200"
              >
                AI Tools
              </div>
              <div
                onClick={() => scrolltoHash("faq")}
                className="text-sm w-full cursor-pointer rounded-xl p-3 bg-zinc-200"
              >
                FAQs
              </div>
              <Link href={"/pricing"} className="w-full">
                <div className="text-sm cursor-pointer rounded-xl p-3 bg-zinc-200">
                  Pricing
                </div>
              </Link>
              <Link href={"/thumbnail-editor"} className="w-full">
                <div className="text-sm cursor-pointer rounded-xl p-3 bg-zinc-200">
                  Thumbnail Editor
                </div>
              </Link>
              <Link href={isSignedIn ? "/dashboard" : "/sign-in"} className="w-full">
                <Button
                  variant={"ghost"}
                  className="text-sm w-full text-zinc-900 border-0 bg-zinc-200 rounded-xl"
                >
                  Dashboard
                </Button>
              </Link>
              <Link href={isSignedIn ? "/dashboard" : "/sign-in"} className="w-full">
          <Button
            variant="ghost"
            className="text-sm w-full rounded-xl text-zinc-100 border-0 bg-red-500"
          >
            LOGIN
          </Button>
        </Link>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default LandingNavbar;
