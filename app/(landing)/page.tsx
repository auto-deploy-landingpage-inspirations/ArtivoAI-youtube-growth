"use client";

import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import TypewriterComponent from "typewriter-effect";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FcGoogle } from "react-icons/fc";
import { PiInstagramLogoFill } from "react-icons/pi";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  CheckCheck,
  Clipboard,
  File,
  FileSignature,
  Heart,
  Menu,
  Table,
  X,
} from "lucide-react";
import { PiYoutubeLogoFill } from "react-icons/pi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const items = [
  {
    title: "AI Content Generation",
    description: "Experience the power of AI in generating unique content.",
    header: (
      <AspectRatio ratio={18 / 4}>
        <Image
          fill
          alt="image"
          src="/first.png"
          className="rounded-2xl max-md:rounded-lg"
        />
      </AspectRatio>
    ),
    className: "md:col-span-2",
    icon: <Clipboard className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Contextual Suggestions",
    description: "Get AI-powered suggestions by your AI Mentor.",
    header: (
      <AspectRatio ratio={15 / 7}>
        <Image
          fill
          alt="image"
          src="/second.png"
          className="rounded-2xl max-md:rounded-lg"
        />
      </AspectRatio>
    ),
    className: "md:col-span-1",
    icon: <File className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of AI",
    description: "Discover the beauty of thoughtful and functional AI.",
    header: (
      <AspectRatio ratio={15 / 7}>
        <Image
          fill
          alt="image"
          src="/third.png"
          className="rounded-2xl max-md:rounded-lg"
        />
      </AspectRatio>
    ),
    className: "md:col-span-1",
    icon: <FileSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: (
      <AspectRatio ratio={18 / 4}>
        <Image
          fill
          alt="image"
          src="/fourth.png"
          className="rounded-2xl max-md:rounded-lg"
        />
      </AspectRatio>
    ),
    className: "md:col-span-2",
    icon: <Table className="h-4 w-4 text-neutral-500" />,
  },
];

const LandingPage = () => {
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  const { isSignedIn } = useAuth();
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({ behavior: "smooth", inline: "nearest" });
  };
  return (
    <div className="h-full w-full">
      {/* ------------------------------NAVBAR----------------------------------- */}
      <nav className="w-full fixed z-10 px-[4vw] p-3 border-b border-zinc-900 bg-black/60 backdrop-blur-sm flex items-center justify-between">
        <div className="flex items-center gap-20">
          <div
            onClick={() => scrolltoHash("top")}
            className="flex items-center cursor-pointer"
          >
            <div className="relative h-5 w-5 mr-2">
              <Image fill alt="Logo" src="/logo.png" />
            </div>
            <h1
              className={cn("text-2xl max-md:text-xl font-semibold text-white")}
            >
              ArtivoAI
            </h1>
          </div>
          <div className="flex gap-8 max-md:hidden">
            <div
              onClick={() => scrolltoHash("faq")}
              className="text-zinc-400 text-sm font-medium cursor-pointer  hover:text-zinc-200"
            >
              FAQ
            </div>

            <div
              onClick={() => scrolltoHash("pricing")}
              className="text-zinc-400 text-sm font-medium cursor-pointer hover:text-zinc-200"
            >
              Pricing
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link target="_blank" href={"https://www.youtube.com/@ArtivoAI"}>
            <PiYoutubeLogoFill className="text-zinc-600 hover:text-zinc-200 transition-all max-md:hidden h-5 w-5" />
          </Link>
          <Link target="_blank" href={"https://www.instagram.com/artivoai"}>
            <PiInstagramLogoFill className="text-zinc-600 hover:text-zinc-200 transition-all max-md:hidden h-5 w-5" />
          </Link>
          <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
            <Button
              variant={"ghost"}
              className="text-sm font-medium border-zinc-800 rounded-2xl max-md:hidden"
            >
              Dashboard
            </Button>
          </Link>
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button
              variant="premium"
              className="text-sm rounded-2xl max-md:hidden"
            >
              GET STARTED
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger className="md:hidden text-zinc-200">
              <Menu />
            </SheetTrigger>
            <SheetContent className=" bg-zinc-950 border-l border-zinc-900 w-auto p-12">
              <SheetClose className="flex flex-col items-center gap-4">
              <div
                onClick={() => scrolltoHash("faq")}
                className="text-zinc-400 text-sm font-medium cursor-pointer  hover:text-zinc-200"
              >
                FAQ
              </div>

              <div
                onClick={() => scrolltoHash("pricing")}
                className="text-zinc-400 text-sm font-medium cursor-pointer hover:text-zinc-200"
              >
                Pricing
              </div>

              <Link target="_blank" href={"https://www.youtube.com/@ArtivoAI"}>
                <PiYoutubeLogoFill className="text-zinc-400 h-5 w-5" />
              </Link>
              <Link target="_blank" href={"https://www.instagram.com/artivoai"}>
                <PiInstagramLogoFill className="text-zinc-400 h-5 w-5" />
              </Link>
              <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
                <Button
                  variant={"ghost"}
                  className="text-sm font-medium border-zinc-800 rounded-2xl"
                >
                  Dashboard
                </Button>
              </Link>
              <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                <Button variant="premium" className="text-sm rounded-2xl">
                  GET STARTED
                </Button>
              </Link>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      {/* ----------------------------HERO SECTION------------------------------- */}
      <div
        id="top"
        className="text-zinc-100 bg-black bg-grid-zinc-900/70 font-bold max-md:pt-28 pt-40 pb-20 px-[4vw] text-left flex shadow-2xl shadow-zinc-950"
      >
        <div className="space-y-12 max-lg:w-full w-[50vw]">
          <div className="space-y-5">
            <h1 className="text-2xl md:text-4xl lg:text-5xl min-[1440px]:text-6xl font-bold">
              Crafted to enhance your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                YouTube
              </span>{" "}
              <TypewriterComponent options={{
              strings: [
                "viewership.",
                "videos.",
                "scripts.",
                "presence."
              ],
              autoStart: true,
              loop: true,
            }}/>
            </h1>
            <h1 className="text-sm md:text-lg text-zinc-400 font-medium">
              Grab free tips and friendly advice to nurture your{" "}
              <br className="max-md:hidden" /> YouTube channel's growth with a
              smile.
            </h1>
          </div>

          <div className="space-y-5">
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
          </div>
        </div>
        <div className="mt-6 rounded-xl max-lg:hidden md:w-[50vw]">
          <TextRevealCard text="1 Subscriber" revealText="1M Subscribers">
            <TextRevealCardTitle>Might Be Yours !</TextRevealCardTitle>
            <TextRevealCardDescription>
              Sometimes, you just need to see it.
              <br /> Hover to see.
            </TextRevealCardDescription>
          </TextRevealCard>
          {/* <AspectRatio ratio={16 / 9}>
            <video
              autoPlay
              loop
              muted
              className="rounded-2xl max-md:rounded-xl"
            >
              <source src="/Artivoai.mp4" />
            </video>
          </AspectRatio> */}
        </div>
      </div>
      {/* -------------------------------BENTO GRID---------------------------------- */}
      <div className="bg-black pt-8 pb-4">
        <BentoGrid className="w-full px-[4vw] md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
      {/* -------------------------------GRID------------------------------------ */}
      <div className="space-y-4 bg-black px-[4vw] pb-8">
        <div className="p-4 flex max-md:flex-col gap-6 bg-zinc-950 border border-zinc-900 rounded-2xl">
          <div className="w-1/2 max-md:w-full border border-zinc-900 rounded-2xl">
            <AspectRatio ratio={16 / 9}>
              <Image
                fill
                alt="image"
                src="/dashboard.png"
                className="rounded-2xl max-md:rounded-lg"
              />
            </AspectRatio>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center w-1/2 max-md:w-full">
            <div className="lg:text-2xl md:text-lg max-md:text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent text-center">
              Optimize Your YouTube Visibility{" "}
              <span className="lg:text-2xl md:text-lg max-md:text-xl font-bold text-zinc-100">
                with AI
              </span>
            </div>
            <p className=" max-lg:text-xs font-light text-center text-zinc-400">
              Unlock effective keyword strategies, compelling titles, and
              engaging descriptions <br className="max-md:hidden" /> to enhance
              your views and attract more subscribers organically.
            </p>
            <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
              <h1 className="text-indigo-400 font-bold text-center lg:pt-16 max-md:pt-8">
                Start Free Today.
              </h1>
            </Link>
          </div>
        </div>
        <div>
          <div className="p-4 flex max-md:flex-col gap-6 bg-zinc-950 border border-zinc-900 rounded-2xl">
            <div className="flex flex-col justify-center items-center w-1/2 max-md:w-full">
              <h1 className="text-xl md:text-lg lg:text-4xl font-bold text-zinc-100 gap-3 flex items-center">
                Introducing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                  AI Mentor
                </span>
                <Badge className="bg-gradient-to-r from-red-500 to-orange-500 border-0">
                  NEW
                </Badge>
              </h1>
              <p className="pt-6 text-xs lg:text-lg font-light text-zinc-400 text-center">
                Access your round-the-clock AI Mentor
                <br /> Gain insights and support whenever you need.
              </p>
              <Link href={isSignedIn ? "/mentor" : "/sign-up"}>
                <h1 className="text-red-500 text-center font-bold pt-12">
                  Start Chatting Now.
                </h1>
              </Link>
            </div>
            <div className="w-1/2 max-md:w-full border border-zinc-900 rounded-2xl">
              <AspectRatio ratio={16 / 9}>
                <Image
                  fill
                  alt="image"
                  src="/mentor.png"
                  className="rounded-2xl max-md:rounded-lg"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------FAQ BOX------------------------------------ */}
      <div
        id="faq"
        className="border-y border-zinc-900 bg-black bg-grid-zinc-900/70 flex flex-col space-y-14 justify-center items-center pt-12 pb-12 min-[1440px]:pt-32 min-[1440px]:pb-32 lg:pt-28 lg:pb-28 md:pt-16 md:pb-16"
      >
        <h1 className="font-bold px-[4vw] text-zinc-100 text-center text-3xl min-[1440px]:text-6xl lg:text-5xl md:text-4xl">
          Frequently Asked{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Questions
          </span>
        </h1>
        <div className="bg-zinc-950 border border-zinc-900 min-[1440px]:w-8/12 lg:w-11/12 md:w-9/12 w-11/12 p-10 rounded-2xl">
          <Accordion type="single" collapsible className="text-zinc-100">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is ArtivoAI and how can it benefit YouTubers?
              </AccordionTrigger>
              <AccordionContent>
                ArtivoAI is an innovative content creation platform designed to
                empower YouTubers with AI-driven tools. It provides script,
                title, and description generators, enhancing video optimization
                and overall channel growth.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How does the Script Generator work, and how can it assist in
                content creation?
              </AccordionTrigger>
              <AccordionContent>
                Our Script Generator utilizes advanced AI algorithms to analyze
                your niche and generate creative and engaging scripts tailored
                to your audience. This tool streamlines the content creation
                process, saving you time and effort while ensuring high-quality
                output.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Tell me more about the Title Generator. How can it help improve
                the visibility of my videos?
              </AccordionTrigger>
              <AccordionContent>
                The Title Generator employs AI to suggest attention-grabbing and
                SEO-friendly titles. By optimizing your video titles, you
                increase the likelihood of attracting a larger audience and
                improving your video's discoverability on YouTube.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What features does the Description Generator offer and how does
                it enhance video optimization?
              </AccordionTrigger>
              <AccordionContent>
                Our Description Generator crafts detailed and keyword-rich
                descriptions, maximizing your video's searchability. This tool
                helps you create compelling meta descriptions that boost SEO and
                encourage higher click-through rates.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Is ArtivoAI suitable for all types of content creators,
                regardless of their niche?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! ArtivoAI is designed to cater to content creators
                across various niches. Our tools are versatile and can be
                customized to suit the unique needs of creators in different
                fields.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                What sets ArtivoAI apart from other similar tools available for
                YouTubers?
              </AccordionTrigger>
              <AccordionContent>
                ArtivoAI stands out through its advanced AI algorithms,
                user-friendly interface, and commitment to continuous
                improvement. We prioritize user feedback and consistently update
                our tools to stay ahead in the ever-evolving landscape of
                content creation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                Is the platform suitable for beginners, or is it more geared
                towards experienced content creators?
              </AccordionTrigger>
              <AccordionContent>
                ArtivoAI is designed to cater to creators of all experience
                levels. Whether you're just starting or looking to enhance your
                established channel, our tools provide valuable assistance in
                content creation and optimization.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                Is ArtivoAI free to use, or are there subscription plans
                available for additional features?
              </AccordionTrigger>
              <AccordionContent>
                ArtivoAI offers both free and premium subscription plans. While
                the free version provides only 10 free generations, our premium
                plan unlocks unlimited generations to further enhance your
                content creation experience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      {/* --------------------------------PRICING BOX------------------------------- */}
      <div id="pricing" className="bg-black lg:p-28 md:p-16 p-6">
        <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500 min-[1440px]:text-6xl md:text-4xl lg:text-5xl text-3xl pt-8 pb-4 font-bold">
          Pricing
        </h1>
        <div className="flex justify-center sm:space-x-4 max-sm:space-y-4 max-sm:flex-col">
          <div className=" text-zinc-100 text-center mt-14 rounded-2xl bg-gradient-to-b from-zinc-950 to-black p-10 w-auto">
            <div className="font-bold min-[1440px]:text-3xl lg:text-2xl md:text-xl text-lg">
              Free Plan
            </div>
            <div className="font-bold text-zinc-500 lg:text-sm text-xs">
              For newbies
            </div>
            <div className="min-[1440px]:text-6xl md:text-5xl text-4xl my-5 font-bold">
              $0{" "}
            </div>
            <div className="text-zinc-500 font-semibold lg:text-sm text-xs">
              Per Month
            </div>
            <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
              <Button
                variant={"ghost"}
                className="my-5 w-full p-8 rounded-2xl min-[1440px]:text-2xl lg:text-xl md:text-sm"
              >
                Start for free
              </Button>
            </Link>
            <div className="flex flex-col space-y-4 items-start md:text-left">
              <div className="flex gap-4">
                <CheckCheck className="text-zinc-500" />
                AI Tools
              </div>
              <div className="flex gap-4">
                <X className="text-zinc-600" />
                Unlimited Generations
              </div>
              <div className="flex gap-4">
                <CheckCheck className="text-zinc-500" />
                10 Free Generations
              </div>
            </div>
          </div>
          <div className=" text-zinc-100 text-center mt-14 rounded-2xl bg-gradient-to-b from-zinc-950 to-black p-10 w-auto">
            <div className="font-bold min-[1440px]:text-3xl lg:text-2xl md:text-xl text-lg text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
              Pro Plan
            </div>
            <div className="font-bold text-zinc-500 lg:text-sm text-xs">
              Supercharge your youtube channel
            </div>
            <div className="min-[1440px]:text-6xl md:text-5xl text-4xl max-lg:flex max-lg:flex-col max-lg:gap-3 my-5 font-bold">
              <span className="text-xl md:text-2xl font-bold line-through decoration-red-500">
                $5
              </span>{" "}
              $2{" "}
              <span className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                ( 165.94 INR )
              </span>
            </div>
            <div className="text-zinc-500 font-semibold lg:text-sm text-xs">
              Per Month
            </div>
            <Button
              disabled={loading}
              onClick={onSubscribe}
              className="my-5 font-bold w-full p-8 rounded-2xl min-[1440px]:text-3xl min-[1440px]:hover:text-4xl lg:text-2xl md:text-xl hover:text-4xl lg:hover:text-3xl transition-all bg-gradient-to-r from-fuchsia-500 to-cyan-500"
            >
              Subscribe
            </Button>
            <div className="flex flex-col space-y-4 items-start md:text-left">
              <div className="flex gap-4">
                <CheckCheck className="text-lime-300" />
                AI Mentor
              </div>
              <div className="flex gap-4">
                <CheckCheck className="text-lime-300" />
                Unlimited Generations
              </div>
              <div className="flex gap-4">
                <CheckCheck className="text-lime-300" />
                Script Generator
              </div>
              <div className="flex gap-4">
                <CheckCheck className="text-lime-300" />
                Title Generator
              </div>
              <div className="flex gap-4">
                <CheckCheck className="text-lime-300" />
                Description Generator
              </div>
              <div className="flex gap-4">
                <CheckCheck className="text-lime-300" />
                Music Generator
              </div>
              <div className="flex gap-4">
                <CheckCheck className="text-lime-300" />
                Tags Generator
              </div>
              <div className="flex gap-4">
                <CheckCheck className="text-lime-300" />
                Name Generator
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------LAST BLOCK------------------------------ */}
      <div className="text-center bg-black space-y-10 p-6 pt-24 pb-24">
        <div className="relative min-[1440px]:h-32 lg:h-28 min-[1440px]:w-32 lg:w-28 h-24 w-24 flex justify-center mx-auto">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className="font-semibold text-zinc-100 min-[1440px]:text-5xl lg:text-4xl text-3xl">
          Revitalize Your YouTube <br /> Presence Now
        </h1>
        <h1 className="min-[1440px]:text-base md:text-sm text-xs text-zinc-400 font-semibold">
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
              className="md:text-base p-4 md:p-6 bg-zinc-100 text-zinc-900 hover:text-zinc-900 rounded-2xl font-semibold"
            >
              <FcGoogle className="mr-3 h-7 w-7" /> Sign up with your Google
              account
            </Button>
          </Link>
        </div>
      </div>
      {/* -----------------------------------FOOTER-------------------------------- */}
      <div>
        <div className="px-[4vw] flex max-md:flex-col max-md:items-center max-md:gap-2 justify-between bg-zinc-950 border-t border-zinc-900 p-6">
          <div className="text-zinc-300 font-bold lg:text-sm text-xs">
            © 2024 ArtivoAI. All rights reserved.
          </div>
          <div className="text-zinc-300 flex gap-4 font-bold lg:text-sm text-xs">
            Made in India with Love.{" "}
            <Heart className="text-red-500 lg:h-5 lg:w-5 h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
