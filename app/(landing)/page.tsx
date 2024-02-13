"use client";

import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import TypewriterComponent from "typewriter-effect";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FcGoogle } from "react-icons/fc";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "@/components/ui/badge";
import { CheckCheck, Heart, Minus, X, YoutubeIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

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
    <div className="h-full space-y-8 md:space-y-10 max-md:ml-[2vw] max-md:mr-[2vw] md:ml-[4vw] md:mr-[4vw]">
      {/* ------------------------------NAVBAR----------------------------------- */}
      <nav className=" md:mt-2 w-[80vw] ml-[8vw] md:w-[75vw] md:ml-[8.5vw] lg:w-[55vw] lg:ml-[18.5vw] min-[1440px]:w-[40vw] min-[1440px]:ml-[26vw] fixed z-10  p-3 backdrop-blur-sm bg-black/40  rounded-3xl flex items-center justify-around">
        <div>
          <div
            onClick={() => scrolltoHash("top")}
            className="flex items-center cursor-pointer"
          >
            <div className="relative h-6 w-6 mr-2">
              <Image fill alt="Logo" src="/logo.png" />
            </div>
            <h1 className={cn("text-xl font-bold text-white")}>ArtivoAI</h1>
          </div>
        </div>
        <div className="flex gap-x-4 max-md:hidden">
          <div
            onClick={() => scrolltoHash("faq")}
            className="text-zinc-400 text-sm font-bold cursor-pointer  hover:text-zinc-200"
          >
            FAQ
          </div>

          <div
            onClick={() => scrolltoHash("pricing")}
            className="text-zinc-400 text-sm font-bold cursor-pointer hover:text-zinc-200"
          >
            PRICING
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
            <Button variant={"ghost"} className="text-sm rounded-3xl max-md:hidden">
              DASHBOARD
            </Button>
          </Link>
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button variant="premium" className="text-sm rounded-3xl">
              GET STARTED
            </Button>
          </Link>
        </div>
      </nav>
      <div id="top" className="pt-px"></div>
      {/* ----------------------------HERO SECTION------------------------------- */}
      <div className="text-zinc-100 bg-gradient-to-b from-zinc-800 to-zinc-900  rounded-3xl font-bold pt-20 pb-10 text-center shadow-2xl shadow-zinc-950">
        <div className="space-y-6">
          <h1 className="text-2xl md:text-4xl lg:text-5xl min-[1440px]:text-5xl font-bold">
            Crafted to enhance your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500">
              YouTube
            </span>{" "}
            viewership
          </h1>
          <h1 className="text-sm md:text-base text-zinc-400 font-semibold">
            Grab free tips and friendly advice to nurture your <br /> YouTube
            channel's growth with a smile.
          </h1>
          <h1 className="text-2xl">Get Started With</h1>
          <div className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500">
            <TypewriterComponent
              options={{
                strings: [
                  "AI Coach.",
                  "Script Generation.",
                  "Music Generation.",
                  "Description Generation.",
                  "Title Generation.",
                  "Tags Generation.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="text-sm md:text-base font-semibold text-zinc-400">
            Create content using AI 10x faster.
          </div>
          <div className="max-md:flex max-md:flex-col max-md:gap-6">
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
              <Button
                variant="ghost"
                className="p-4 md:hidden rounded-3xl font-semibold"
              >
                Go to Dashboard
                
              </Button>
            </Link>
            <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
              <Button
                variant="ghost"
                className="md:text-base p-4 md:p-6 rounded-3xl font-semibold"
              >
                <FcGoogle className="mr-3 h-7 w-7" /> Sign up with your Google
                account
              </Button>
            </Link>
          </div>
          <div className="text-zinc-400 text-xs md:text-sm font-semibold">
            No credit card required.
          </div>
        </div>

        <div className="mt-6 rounded-3xl max-md:w-[80vw] max-md:ml-[8vw] md:ml-[11vw] md:w-[70vw]">
          <AspectRatio ratio={16 / 9}>
            <Image
              fill
              alt="image"
              src="/dashboard.png"
              className="rounded-3xl max-md:rounded-lg"
            />
          </AspectRatio>
        </div>
      </div>
      {/* -------------------------------BOX 1---------------------------------- */}
      <div className="text-zinc-100 p-3 rounded-3xl bg-zinc-800 mt-10 text-center min-[1440px]:space-y-6 lg:space-y-2 space-y-1 shadow-2xl shadow-zinc-950">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: true,
            }),
          ]}
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/6">
              <div className="p-1">
                <Card className="bg-zinc-800 border-0">
                  <CardContent className="text-zinc-600 flex items-center gap-4 justify-center p-6">
                    <YoutubeIcon />
                    <div className="font-bold">Youtube</div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/6">
              <div className="p-1">
                <Card className="bg-zinc-800 border-0">
                  <CardContent className="text-zinc-600 flex items-center gap-4 justify-center p-6">
                    <YoutubeIcon />
                    <div className="font-bold">Youtube</div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/6">
              <div className="p-1">
                <Card className="bg-zinc-800 border-0">
                  <CardContent className="text-zinc-600 flex items-center gap-4 justify-center p-6">
                    <YoutubeIcon />
                    <div className="font-bold">Youtube</div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/6">
              <div className="p-1">
                <Card className="bg-zinc-800 border-0">
                  <CardContent className="text-zinc-600 flex items-center gap-4 justify-center p-6">
                    <YoutubeIcon />
                    <div className="font-bold">Youtube</div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/6">
              <div className="p-1">
                <Card className="bg-zinc-800 border-0">
                  <CardContent className="text-zinc-600 flex items-center gap-4 justify-center p-6">
                    <YoutubeIcon />
                    <div className="font-bold">Youtube</div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/6">
              <div className="p-1">
                <Card className="bg-zinc-800 border-0">
                  <CardContent className="text-zinc-600 flex items-center gap-4 justify-center p-6">
                    <YoutubeIcon />
                    <div className="font-bold">Youtube</div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/6">
              <div className="p-1">
                <Card className="bg-zinc-800 border-0">
                  <CardContent className="text-zinc-600 flex items-center gap-4 justify-center p-6">
                    <YoutubeIcon />
                    <div className="font-bold">Youtube</div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/6">
              <div className="p-1">
                <Card className="bg-zinc-800 border-0">
                  <CardContent className="text-zinc-600 flex items-center gap-4 justify-center p-6">
                    <YoutubeIcon />
                    <div className="font-bold">Youtube</div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        
        <div className="md:text-4xl max-md:text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          Optimize Your YouTube Visibility
        </div>
        <div className="md:text-4xl max-md:text-xl font-bold">with AI</div>
        <p className="max-md:text-sm">
          Unlock effective keyword strategies, compelling titles, and engaging
          descriptions <br className="max-md:hidden" /> to enhance your views and attract more subscribers
          organically.
        </p>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <h1 className="text-indigo-400 font-bold text-center pt-16 max-md:pt-8">
            Start Free Today.
          </h1>
        </Link>
        
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: true,
            }),
          ]}
          opts={{
            align: "start",
          }}
          className="mt-10 w-full"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/6">
              <div className="p-1">
                <Card className="bg-zinc-800 border-0">
                  <CardContent className="text-zinc-600 flex items-center gap-4 justify-center p-6">
                    <YoutubeIcon />
                    <div className="font-bold">Youtube</div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/6">
              <div className="p-1">
                <Card className="bg-zinc-800 border-0">
                  <CardContent className="text-zinc-600 flex items-center gap-4 justify-center p-6">
                    <YoutubeIcon />
                    <div className="font-bold">Youtube</div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/6">
              <div className="p-1">
                <Card className="bg-zinc-800 border-0">
                  <CardContent className="text-zinc-600 flex items-center gap-4 justify-center p-6">
                    <YoutubeIcon />
                    <div className="font-bold">Youtube</div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/6">
              <div className="p-1">
                <Card className="bg-zinc-800 border-0">
                  <CardContent className="text-zinc-600 flex items-center gap-4 justify-center p-6">
                    <YoutubeIcon />
                    <div className="font-bold">Youtube</div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/6">
              <div className="p-1">
                <Card className="bg-zinc-800 border-0">
                  <CardContent className="text-zinc-600 flex items-center gap-4 justify-center p-6">
                    <YoutubeIcon />
                    <div className="font-bold">Youtube</div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/6">
              <div className="p-1">
                <Card className="bg-zinc-800 border-0">
                  <CardContent className="text-zinc-600 flex items-center gap-4 justify-center p-6">
                    <YoutubeIcon />
                    <div className="font-bold">Youtube</div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/6">
              <div className="p-1">
                <Card className="bg-zinc-800 border-0">
                  <CardContent className="text-zinc-600 flex items-center gap-4 justify-center p-6">
                    <YoutubeIcon />
                    <div className="font-bold">Youtube</div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/6">
              <div className="p-1">
                <Card className="bg-zinc-800 border-0">
                  <CardContent className="text-zinc-600 flex items-center gap-4 justify-center p-6">
                    <YoutubeIcon />
                    <div className="font-bold">Youtube</div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      {/* --------------------------------BOX 2----------------------------------- */}
      <div className="pt-12 pb-12">
        
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-4xl font-bold text-zinc-100 gap-3 flex items-center">
            Introducing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              AI Mentor
            </span>
            <Badge className="bg-gradient-to-r from-red-500 to-orange-500 border-0">
              NEW
            </Badge>
          </h1>
          <p className="pt-6 text-sm md:text-lg font-light text-zinc-400 text-center">
            Access your round-the-clock AI Mentor
            <br /> Gain insights and support whenever you need.
          </p>
          <Link href={isSignedIn ? "/mentor" : "/sign-up"}>
            <h1 className="text-red-500 text-center font-bold pt-12 pb-12">
              Start Chatting Now.
            </h1>
          </Link>
        </div>
        <div className="lg:ml-[18.5vw] lg:w-[55vw] md:ml-[11vw] md:w-[70vw]">
          <AspectRatio ratio={16 / 9}>
            <Image
              fill
              alt="image"
              src="/mentor.png"
              className="rounded-3xl max-md:rounded-lg shadow-2xl shadow-zinc-950"
            />
          </AspectRatio>
        </div>
      </div>

      {/* -------------------------------FAQ BOX------------------------------------ */}
      <div
        id="faq"
        className=" bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-3xl flex flex-col space-y-14 justify-center items-center pt-12 pb-12 min-[1440px]:pt-32 lg:pt-28 md:pt-16 min-[1440px]:pb-32 lg:pb-28 md:pb-16 shadow-2xl shadow-zinc-950"
      >
        <h1 className="font-medium text-zinc-100 text-2xl min-[1440px]:text-6xl lg:text-5xl md:text-4xl">
          Frequently Asked{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-200">
            Questions
          </span>
        </h1>
        <div className="bg-zinc-900 min-[1440px]:w-8/12 lg:w-11/12 md:w-9/12 w-11/12 p-10 rounded-3xl">
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
      <div
        id="pricing"
        className=" rounded-3xl lg:p-28 md:p-16 p-6 shadow-2xl shadow-zinc-950 bg-gradient-to-b from-zinc-800 to-zinc-900"
      >
        <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500 min-[1440px]:text-6xl md:text-4xl lg:text-5xl text-3xl pt-8 pb-4 font-bold">
          Pricing
        </h1>
        <div className="flex justify-center sm:space-x-4 max-sm:space-y-4 max-sm:flex-col">
          <div className=" text-zinc-100 text-center mt-14 rounded-3xl bg-zinc-900 p-10 w-auto">
            <div className="font-bold min-[1440px]:text-3xl lg:text-2xl md:text-xl text-lg">Free Plan</div>
            <div className="font-bold text-zinc-500 lg:text-sm text-xs">For newbies</div>
            <div className="min-[1440px]:text-6xl md:text-5xl text-4xl my-5 font-bold">$0 </div>
            <div className="text-zinc-500 font-semibold lg:text-sm text-xs">Per Month</div>
            <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
              <Button
                variant={"ghost"}
                className="my-5 w-full p-8 rounded-3xl min-[1440px]:text-2xl lg:text-xl md:text-sm"
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
          <div className=" text-zinc-100 text-center mt-14 rounded-3xl bg-zinc-900 p-10 w-auto">
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
            <div className="text-zinc-500 font-semibold lg:text-sm text-xs">Per Month</div>
            <Button
              disabled={loading}
              onClick={onSubscribe}
              className="my-5 font-bold w-full p-8 rounded-3xl min-[1440px]:text-3xl min-[1440px]:hover:text-4xl lg:text-2xl md:text-xl hover:text-4xl lg:hover:text-3xl transition-all bg-gradient-to-r from-fuchsia-500 to-cyan-500"
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
      <div className="text-center space-y-8 p-6 pt-24">
        <div className="relative min-[1440px]:h-32 lg:h-28 min-[1440px]:w-32 lg:w-28 h-24 w-24 flex justify-center mx-auto">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className="font-semibold text-zinc-100 min-[1440px]:text-5xl lg:text-4xl text-3xl">
          Revitalize Your YouTube <br /> Presence Now
        </h1>
        <h1 className="min-[1440px]:text-base md:text-sm text-xs text-zinc-400 font-semibold">
          Become part of the thriving community leveraging ArtivoAI for channel
          <br className="max-md:hidden"/>
          expansion Connect with the multitude of content creators utilizing
          ArtivoAI <br className="max-md:hidden"/> to elevate their channels and achieve substantial
          growth.
        </h1>
        <div>
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button
              variant="ghost"
              className="md:text-base p-4 md:p-6 rounded-3xl font-semibold"
            >
              <FcGoogle className="mr-3 h-7 w-7" /> Sign up with your Google
              account
            </Button>
          </Link>
        </div>
      </div>
      {/* -----------------------------------FOOTER-------------------------------- */}
      <div>
      <div className="md:ml-[21vw] md:w-[50vw]">
          <AspectRatio ratio={16 / 7}>
            <Image
              fill
              alt="image"
              src="/hero.png"
              className="drop-shadow-[0_25px_25px_rgba(9,9,11,0.5)]"
            />
          </AspectRatio>
        </div>
      <div className="flex max-md:flex-col max-md:items-center max-md:gap-2 justify-between shadow-2xl shadow-zinc-950 bg-zinc-800 rounded-t-3xl p-6">
        <div className="text-zinc-300 font-bold lg:text-sm text-xs">
          © 2024 ArtivoAI. All rights reserved.
        </div>
        <Minus className="text-zinc-300 max-lg:hidden" />
        <Minus className="text-zinc-300 max-md:hidden" />
        <Minus className="text-zinc-300 max-md:hidden" />
        <Minus className="text-zinc-300 max-md:hidden" />
        <div className="text-zinc-300 flex gap-4 font-bold lg:text-sm text-xs">
          Made in India with Love. <Heart className="text-red-500 lg:h-5 lg:w-5 h-4 w-4" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default LandingPage;
