import Link from "next/link";
import { Button } from "./ui/button";
import { CheckCheck, X } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";


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
    <div id="pricing" className="w-full py-20">
        <div className="px-[4vw] text-center text-5xl font-semibold text-red-500">Pricing</div>
        <div className="flex px-[4vw] justify-center sm:space-x-4 max-sm:space-y-4 max-sm:flex-col">
          <div className=" text-zinc-100 text-center mt-14 rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900 p-10 w-auto">
            <div className="font-bold min-[1440px]:text-3xl lg:text-2xl md:text-xl text-lg">
              Free Plan
            </div>
            <div className="font-bold text-zinc-500 lg:text-sm text-xs">
              For newbies
            </div>
            <div className="min-[1440px]:text-6xl md:text-5xl text-4xl my-5 font-bold">
            &#8377;0{" "}
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
          <div className=" text-zinc-100 text-center mt-14 rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900 p-10 w-auto">
            <div className="font-bold min-[1440px]:text-3xl lg:text-2xl md:text-xl text-lg text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-500">
              Pro Plan
            </div>
            <div className="font-bold text-zinc-500 lg:text-sm text-xs">
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
            <Button
              disabled={loading}
              onClick={onSubscribe}
              className="my-5 font-bold w-full p-8 rounded-2xl min-[1440px]:text-3xl min-[1440px]:hover:text-4xl lg:text-2xl md:text-xl hover:text-4xl lg:hover:text-3xl transition-all bg-gradient-to-r from-red-500 to-red-500"
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
  )
};

export default LandingPricing;