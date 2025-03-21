"use client";

import { Bot, BrainCircuit, LayoutDashboard, Library, Lightbulb, Menu, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FreeCounter } from "./free-counter";
import { usePathname } from "next/navigation";


const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "AI Mentor",
    icon: Bot,
    href: "/mentor",
    color: "text-orange-600",
  },
  {
    label: "Content Ideas",
    icon: Lightbulb,
    href: "/ideas",
    color: "text-purple-600",
  },
  {
    label: "AI Tools",
    icon: BrainCircuit,
    href: "/tools",
    color: "text-yellow-600",
  },
  {
    label: "Prompt Library",
    icon: Library,
    href: "/prompt",
    color: "text-red-600",
  },{
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-zinc-600",
  },
  
];

interface MobileSidebarProps{
  apiLimitCount:number;
  isPro:boolean;
}

const MobileSidebar = ({
  apiLimitCount = 0,
  isPro = false,
}: MobileSidebarProps) => {
  const pathname = usePathname();
    const[isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true);
    }, []);

    if (!isMounted){
        return null;
    }
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        {/* <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} /> */}
        <div className="space-y-4 shadow-2xl shadow-zinc-950 md:rounded-2xl py-4 flex flex-col justify-between max-md:h-dvh h-screen md:h-[95vh] bg-zinc-800 text-zinc-200 ">
      <div className="px-3 py-2 md:flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-10">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src="/logo.png" />
          </div>
          <h1 className="text-2xl font-bold">ArtivoAI</h1>
        </Link>
        <div className="space-y-2">
          {routes.map((route) => (
            
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-black/30 rounded-2xl transition",
                pathname === route.href
                  ? "text-white bg-black/30"
                  : "text-zinc-400"
              )}
            >
              <SheetClose>
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
              </SheetClose>
            </Link>
            
          ))}
        </div>
      </div>
      <FreeCounter 
        isPro={isPro}
        apiLimitCount={apiLimitCount}
      />
    </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
