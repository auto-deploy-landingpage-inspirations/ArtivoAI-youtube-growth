import Link from "next/link";
import { Button } from "./ui/button";
import { BadgeAlert, BadgeCheck, BadgePercent } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

const LandingPricing = () => {
  const [loading, setLoading] = useState(false);
  const { isSignedIn } = useAuth();
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
  return (
    <div id="pricing" className="w-full bg-zinc-50 py-20 pt-32">
      <div className="px-[4vw] text-center text-5xl font-bold text-zinc-900 underline decoration-red-500">
        Pricing
      </div>
      <Alert className="w-[30vw] max-md:w-[90vw] ml-[35vw] max-md:ml-[5vw] bg-zinc-200 border border-zinc-300 text-zinc-900 mt-12">
        <BadgePercent className="h-4 w-4 text-zinc-100" />
        <AlertTitle>
          The early bird gets the{" "}
          <span className="bg-lime-500 p-1 rounded-xl text-zinc-900">
            discount!
          </span>
        </AlertTitle>
        <AlertDescription>
          Snatch the Early Birds Offer before March 29th.
        </AlertDescription>
      </Alert>
      <div className="flex px-[4vw] justify-center sm:space-x-4 max-sm:space-y-4 max-sm:flex-col">
        <div className=" text-zinc-900 text-center mt-14 rounded-2xl bg-zinc-200 border border-zinc-300 p-10 w-auto">
          <div className="font-bold min-[1440px]:text-3xl lg:text-2xl md:text-xl text-lg">
            Free
          </div>
          <div className="font-bold text-zinc-700 lg:text-sm text-xs">
            For newbies
          </div>
          <div className="min-[1440px]:text-6xl md:text-5xl text-4xl my-5 font-bold">
            &#8377;0{" "}
          </div>
          <div className="text-zinc-500 font-semibold lg:text-sm text-xs">
            Per Month
          </div>
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button
              variant={"ghost"}
              className="my-5 w-full p-8 font-bold text-zinc-900 hover:bg-zinc-800 hover:border-zinc-600 rounded-2xl min-[1440px]:text-2xl lg:text-xl md:text-sm"
            >
              Start for free
            </Button>
          </Link>
          <div className="flex gap-4">
            <BadgeAlert className="text-zinc-500" />
            10 Free Generations
          </div>
        </div>
        <div className=" text-zinc-100 text-center mt-14 rounded-2xl bg-zinc-800 border border-zinc-300 shadow-2xl p-10 w-auto">
          <div className="font-bold min-[1440px]:text-3xl lg:text-2xl md:text-xl text-lg text-red-500">
            Pro
          </div>
          <div className="font-bold text-zinc-300 lg:text-sm text-xs">
            Supercharge your youtube channel
          </div>
          <div className="min-[1440px]:text-6xl md:text-5xl text-4xl max-lg:flex max-lg:flex-col max-lg:gap-3 my-5 font-bold">
            <span className="text-xl md:text-2xl font-bold line-through decoration-red-500">
              &#8377;450
            </span>{" "}
            &#8377;199{" "}
          </div>
          <div className="text-zinc-500 font-semibold lg:text-sm text-xs">
            Per Month
          </div>
          <Link href={isSignedIn ? "/settings" : "/sign-up"}>
            <Button className="my-5 font-bold w-full p-8 rounded-2xl min-[1440px]:text-2xl min-[1440px]:hover:text-3xl lg:text-2xl md:text-xl hover:text-3xl lg:hover:text-3xl transition-all bg-gradient-to-r from-red-500 to-red-500">
              Subscribe
            </Button>
          </Link>
          <div className="flex gap-4">
            <BadgeCheck className="text-lime-300" />
            Unlimited Generations
          </div>
        </div>
      </div>
      <div className="text-zinc-900 font-light text-2xl px-[4vw] text-center mt-24">
        Dive into a{" "}
        <span className="bg-yellow-500 font-bold p-1 rounded-xl text-zinc-900">
          community
        </span>{" "}
        of creativity —{" "}
        <span className="bg-indigo-500 font-bold p-1 rounded-xl text-zinc-900">
          500+ creators
        </span>{" "}
        are already on board with{" "}
        <span className="bg-red-500 font-bold p-1 rounded-xl text-zinc-900">
          artivoAI
        </span>
      </div>
    </div>
  );
};

export default LandingPricing;
