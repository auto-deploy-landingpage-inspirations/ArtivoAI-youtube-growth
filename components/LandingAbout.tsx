import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { BrainCircuit, Clipboard, File, FileHeart, FileSignature, MessageSquareDot, Speech, Table } from "lucide-react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Skeleton1 = () => (
  <div className="flex justify-center items-center w-full h-full min-h-[6rem] rounded-xl border-0 bg-indigo-500"><BrainCircuit className="h-12 w-12" /></div>
);
const Skeleton2 = () => (
  <div className="flex justify-center items-center w-full h-full min-h-[6rem] rounded-xl border-0 bg-yellow-500"><MessageSquareDot className="h-12 w-12" /></div>
);
const Skeleton3 = () => (
  <div className="flex justify-center items-center w-full h-full min-h-[6rem] rounded-xl border-0 bg-amber-500"><FileHeart className="h-12 w-12" /></div>
);
const Skeleton4 = () => (
  <div className="flex justify-center items-center w-full h-full min-h-[6rem] rounded-xl border-0 bg-pink-500"><Speech className="h-12 w-12"/></div>
);
const items = [
  {
    title: "AI Content Generation",
    description: "Experience the power of AI in generating unique content.",
    header: <Skeleton1 />,
    className: "md:col-span-2",
    icon: <Clipboard className="h-4 w-4 text-zinc-100" />,
  },
  {
    title: "Contextual Suggestions",
    description: "Get AI-powered suggestions by your AI Mentor.",
    header: <Skeleton2 />,
    className: "md:col-span-1",
    icon: <File className="h-4 w-4 text-zinc-100" />,
  },
  {
    title: "The Art of AI",
    description: "Discover the beauty of thoughtful and functional AI.",
    header: <Skeleton3 />,
    className: "md:col-span-1",
    icon: <FileSignature className="h-4 w-4 text-zinc-100" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton4 />,
    className: "md:col-span-2",
    icon: <Table className="h-4 w-4 text-zinc-100" />,
  },
];


const LandingAbout = () => {
  return (
    <div id="about" className="w-full text-zinc-100 py-20">
      <h1 className="text-5xl font-light px-[4vw]">
        Unlock effortless <span className="underline decoration-sky-500">YouTube growth</span>{" "}
        with <span className="underline decoration-red-500">artivoAI</span>. Access the strategies and talent powering the biggest
        creators and <span className="underline decoration-yellow-500">achieve</span> your YouTube goals,{" "}
        <span className="underline decoration-indigo-500">faster.</span>
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
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
};

export default LandingAbout;
