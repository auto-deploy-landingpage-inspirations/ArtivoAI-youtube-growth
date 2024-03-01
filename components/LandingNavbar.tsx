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
    <nav className="w-full fixed z-10 px-[4vw] py-3 backdrop-blur-sm flex items-center justify-between">
      <div
        onClick={() => scrolltoHash("top")}
        className="flex items-center cursor-pointer"
      >
        {/* <div className="relative h-7 w-7 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div> */}
        <h1 className={cn("text-2xl font-bold text-white")}>
          artivo<span className="font-bold text-red-500">AI.</span>
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex gap-8 max-md:hidden text-zinc-100 font-semibold transition-all">
          <div
            onClick={() => scrolltoHash("about")}
            className="text-sm cursor-pointer hover:text-red-500"
          >
            About
          </div>
          <div
            onClick={() => scrolltoHash("tools")}
            className="text-sm cursor-pointer hover:text-red-500"
          >
            AI Tools
          </div>
          <div
            onClick={() => scrolltoHash("faq")}
            className="text-sm cursor-pointer hover:text-red-500"
          >
            FAQs
          </div>
          <Link href={"/pricing"}>
            <div className="text-sm cursor-pointer hover:text-red-500">
              Pricing
            </div>
          </Link>
          <Link href={"/thumbnail-editor"}>
            <div className="text-sm cursor-pointer hover:text-red-500">
              Thumbnail Editor
            </div>
          </Link>
        </div>

        <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
          <Button
            variant={"ghost"}
            className="text-sm font-medium border-zinc-800 rounded-2xl max-md:hidden ml-12"
          >
            Dashboard
          </Button>
        </Link>
        {/* <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
          <Button
            variant="ghost"
            className="text-sm w-24 rounded-2xl max-md:hidden"
          >
            LOGIN
          </Button>
        </Link> */}
        <Sheet>
          <SheetTrigger className="md:hidden text-zinc-200">
            <Menu />
          </SheetTrigger>
          <SheetContent className=" bg-zinc-900 border-l border-red-500 rounded-l-3xl w-auto pt-12">
            <SheetClose className="flex flex-col items-center text-zinc-100 font-semibold gap-4">
              <div
                onClick={() => scrolltoHash("about")}
                className="text-sm cursor-pointer hover:text-red-500"
              >
                About
              </div>
              <Separator />
              <div
                onClick={() => scrolltoHash("tools")}
                className="text-sm cursor-pointer hover:text-red-500"
              >
                AI Tools
              </div>
              <Separator />
              <div
                onClick={() => scrolltoHash("faq")}
                className="text-sm cursor-pointer hover:text-red-500"
              >
                FAQs
              </div>
              <Separator />
              <Link href={"/pricing"}>
                <div className="text-sm cursor-pointer hover:text-red-500">
                  Pricing
                </div>
              </Link>
              <Separator />
              <Link href={"/thumbnail-editor"}>
                <div className="text-sm cursor-pointer hover:text-red-500">
                  Thumbnail Editor
                </div>
              </Link>
              <Separator />
              <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
                <Button
                  variant={"ghost"}
                  className="text-sm font-medium border-zinc-800 rounded-2xl"
                >
                  Dashboard
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
