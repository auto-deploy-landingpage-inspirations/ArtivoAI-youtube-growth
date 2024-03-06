import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useAuth } from "@clerk/nextjs";

const SimpleNavbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="w-full fixed z-10 px-[4vw] py-3 bg-zinc-50 border-0 shadow-sm flex items-center justify-between">
      <Link href={"/"}>
        <div className="flex items-center cursor-pointer">
          {/* <div className="relative h-7 w-7 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div> */}
          <h1 className={cn("text-2xl font-bold text-zinc-950")}>
            artivo<span className="font-bold text-red-500">AI.</span>
          </h1>
        </div>
      </Link>

      <div className="flex items-center md:gap-4">
        
        <Link href={"/"}>
          <Button
            variant="ghost"
            className="text-sm font-medium text-zinc-900 border-0 bg-zinc-200 rounded-xl"
          >
            Go back
          </Button>
        </Link>
        <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
          <Button
            variant={"ghost"}
            className="text-sm font-medium text-zinc-900 border-0 bg-zinc-200 rounded-xl max-lg:hidden"
          >
            Dashboard
          </Button>
        </Link>
        
        
      </div>
    </nav>
  );
};

export default SimpleNavbar;
