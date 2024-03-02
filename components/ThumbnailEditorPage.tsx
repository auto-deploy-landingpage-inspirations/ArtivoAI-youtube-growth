import Link from "next/link";
import { Button } from "./ui/button";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { BadgeIndianRupee, FileBadge, LineChart, Tv2 } from "lucide-react";

const Skeleton1 = () => (
  <div className="flex justify-center items-center w-full h-full min-h-[6rem] rounded-xl border border-lime-900 bg-zinc-900">
    <LineChart className="h-12 w-12 text-lime-500" />
  </div>
);
const Skeleton2 = () => (
  <div className="flex justify-center items-center w-full h-full min-h-[6rem] rounded-xl border border-sky-900 bg-zinc-900">
    <FileBadge className="h-12 w-12 text-sky-500" />
  </div>
);
const Skeleton3 = () => (
  <div className="flex justify-center items-center w-full h-full min-h-[6rem] rounded-xl border border-yellow-900 bg-zinc-900">
    <Tv2 className="h-12 w-12 text-yellow-500" />
  </div>
);
const Skeleton4 = () => (
  <div className="flex justify-center items-center w-full h-full min-h-[6rem] rounded-xl border border-orange-900 bg-zinc-900">
    <BadgeIndianRupee className="h-12 w-12 text-orange-500" />
  </div>
);
const items = [
  {
    title: "Tailored Thumbnail Excellence :",
    description:
      "Our experienced Thumbnail Editors understand the importance of visually captivating thumbnails. We tailor each design to suit your unique style and content, ensuring every thumbnail tells a compelling story about your video.",
    header: <Skeleton1 />,
    className: "md:col-span-2",
  },
  {
    title: "Dedicated Editing Team :",
    description:
      "At artivoAI, you get a dedicated team of Thumbnail Editors committed to enhancing your YouTube presence. Our professionals work closely with you to understand your brand and deliver thumbnails that resonate with your audience.",
    header: <Skeleton2 />,
    className: "md:col-span-1",
  },
  {
    title: "Efficiency & Quick Turnarounds :",
    description:
      "We value your time! With our efficient workflow, you can expect high-quality thumbnails delivered promptly. Stay consistent with your upload schedule without compromising on the visual appeal of your content.",
    header: <Skeleton3 />,
    className: "md:col-span-1",
  },
  {
    title: "Affordable Packages :",
    description:
      "We believe in making professional thumbnail editing accessible to all. Choose from our affordable packages designed to cater to the needs of creators at every level. Get quality without breaking the bank.",
    header: <Skeleton4 />,
    className: "md:col-span-2",
  },
];

const ThumbnailEditorPage = () => {
  return (
    <div className="w-full">
      <div className="px-[4vw] pt-40">
        <h1 className="text-zinc-100 text-5xl">
          Supercharge your{" "}
          <span className="underline decoration-red-500 font-bold">
            YouTube visibility
          </span>{" "}
          effortlessly with our elite{" "}
          <span className="underline decoration-sky-500 font-bold">
            Thumbnail Editor.
          </span>
        </h1>
        <h1 className="text-zinc-300 font-light text-2xl mt-6">
          The road to YouTube fame is more complex and demanding than it seems.
        </h1>
        <Link href={"/"}>
          <Button variant={"premium"} className="mt-12 rounded-2xl">
            Secure your very own Personal Editor today!
          </Button>
        </Link>
        <h1 className="text-zinc-300 font-light text-lg mt-6">
          Editors available for as low as{" "}
          <span className="font-bold underline decoration-lime-500">
            &#8377;5999
          </span>{" "}
          per month.
        </h1>
      </div>
      <div className="mt-12 pt-12 pb-12 border-y border-zinc-800">
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
      <div className="px-[4vw] mt-24 mb-24">
        <h1 className="text-zinc-200 font-bold text-3xl">How it Works :</h1>
        <h1 className="text-zinc-200 font-light text-xl mt-8">
          1. Start by reaching out to us for a{" "}
          <span className="font-bold bg-lime-500 text-zinc-900 rounded">
            personalized consultation.
          </span>{" "}
          Share your vision, style preferences, and branding elements with our
          team.
        </h1>
        <h1 className="text-zinc-200 font-light text-xl mt-4">
          2. Our{" "}
          <span className="font-bold bg-indigo-500 text-zinc-900 rounded">
            Thumbnail Editors
          </span>{" "}
          will get to work, creating visually <span className="font-bold bg-sky-500 text-zinc-900 rounded">stunning thumbnails</span> that align
          with your content and engage your audience.
        </h1>
        <h1 className="text-zinc-200 font-light text-xl mt-4">
          3. Once approved, your finalized thumbnails will be delivered
          promptly, ready to <span className="font-bold bg-yellow-500 text-zinc-900 rounded">boost your video's</span> click-through rate.
        </h1>
      </div>
      <div className="text-center py-24 px-[4vw]">
      <Link href={"/"}>
          <Button variant={"premium"} className="rounded-2xl">
            Secure your very own Personal Editor today!
          </Button>
        </Link>
        <h1 className="text-zinc-300 font-light text-2xl mt-6">
          Editors available for as low as{" "}
          <span className="font-bold underline decoration-lime-500">
            &#8377;5999
          </span>{" "}
          per month.
        </h1>
      </div>
    </div>
  );
};
export default ThumbnailEditorPage;
