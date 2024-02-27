import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { BrainCircuit, Clipboard, File, FileHeart, FileSignature, LineChart, MessageSquareDot, Speech, Table, Tv2 } from "lucide-react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Skeleton1 = () => (
  <div className="flex justify-center items-center w-full h-full min-h-[6rem] rounded-xl border-0 bg-indigo-500"><LineChart className="h-12 w-12" /></div>
);
const Skeleton2 = () => (
  <div className="flex justify-center items-center w-full h-full min-h-[6rem] rounded-xl border-0 bg-yellow-500"><MessageSquareDot className="h-12 w-12" /></div>
);
const Skeleton3 = () => (
  <div className="flex justify-center items-center w-full h-full min-h-[6rem] rounded-xl border-0 bg-purple-500"><Tv2 className="h-12 w-12" /></div>
);
const Skeleton4 = () => (
  <div className="flex justify-center items-center w-full h-full min-h-[6rem] rounded-xl border-0 bg-pink-500"><BrainCircuit className="h-12 w-12"/></div>
);
const items = [
  {
    title: "Optimize the Organic Visibility of Your Video",
    description: "Maximize YouTube visibility by creating engaging content and strategically employing researched keywords in titles, descriptions, tags, etc.",
    header: <Skeleton1 />,
    className: "md:col-span-2",
    
  },
  {
    title: "Relevant Recommendations",
    description: "Receive personalized guidance from your AI Mentor through AI-driven recommendations.",
    header: <Skeleton2 />,
    className: "md:col-span-1",
    
  },
  {
    title: "AI-Generated Video Titles",
    description: "Leverage our AI tools to automatically generate catchy and SEO-friendly video titles, saving time and optimizing content discoverability.",
    header: <Skeleton3 />,
    className: "md:col-span-1",
  },
  {
    title: "Continuous Learning and Updates",
    description:
      "Benefit from a platform that evolves with the latest AI advancements, ensuring you always have access to cutting-edge tools and features for sustained growth on YouTube.",
    header: <Skeleton4 />,
    className: "md:col-span-2",
  },
];


const LandingAbout = () => {
  return (
    <div id="about" className="w-full text-zinc-100 py-20">
      <h1 className="text-5xl font-light px-[4vw]">
        Unlock effortless <span className="underline decoration-sky-500 font-semibold">YouTube growth</span>{" "}
        with <span className="underline decoration-red-500 font-semibold">artivoAI</span>. Access the strategies and talent powering the biggest
        creators and <span className="underline decoration-yellow-500 font-semibold">achieve</span> your YouTube goals,{" "}
        <span className="underline decoration-indigo-500 font-semibold">faster.</span>
      </h1>
      <div className="mt-12 pt-12 border-t border-zinc-800">
        <BentoGrid className="px-[4vw] md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
};

export default LandingAbout;
