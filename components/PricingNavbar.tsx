import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import { useAuth } from "@clerk/nextjs";

const PricingNavbar = () => {
  const { isSignedIn } = useAuth();
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({ behavior: "smooth", inline: "nearest" });
  };
  return (
    <nav className="w-full fixed z-10 px-[4vw] py-3 backdrop-blur-sm flex items-center justify-between">
      <Link href={"/"}>
        <div className="flex items-center cursor-pointer">
          <div className="relative h-7 w-7 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl max-md:text-xl font-light text-white")}>
            Artivo<span className="font-bold">AI</span>
          </h1>
        </div>
      </Link>

      <div className="flex items-center md:gap-4">
        
        <Link href={"/"}>
          <Button
            variant="ghost"
            className="text-sm font-medium border-zinc-800 rounded-2xl"
          >
            Go back
          </Button>
        </Link>
        <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
          <Button
            variant={"ghost"}
            className="text-sm font-medium border-zinc-800 rounded-2xl max-md:hidden"
          >
            Dashboard
          </Button>
        </Link>
        
        
      </div>
    </nav>
  );
};

export default PricingNavbar;
