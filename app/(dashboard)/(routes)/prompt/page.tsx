"use client";

import CopyToClipboardButton from "@/components/CopyToClipboardButton";
import { Separator } from "@/components/ui/separator";

const ToolsPage = () => {
  return (
    <div className="flex max-md:flex-col gap-6 p-6">
      <div className="bg-zinc-900  rounded-2xl p-6">
        <h1 className="text-zinc-400 text-xl font-bold pb-6">
          Prompts for AI Mentor
        </h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
          <Separator />
          <div className="flex gap-4 py-4 justify-between">
            How do I get more views ?
            <CopyToClipboardButton textToCopy="How do I get more views ?" />
          </div>
          <Separator />
          <div className="flex gap-4 py-4  justify-between">
            Improve This Title ....
            <CopyToClipboardButton textToCopy="Improve This Title ...." />
          </div>
          <Separator />
          <div className="flex gap-4 py-4  justify-between">
            How can I Improve my Channel ?
            <CopyToClipboardButton textToCopy="How can I Improve my Channel ?" />
          </div>
          <Separator />
          <div className="flex gap-4 py-4  justify-between">
            Draft a professional collaboration proposal message for reaching out
            to another content creator.
            <CopyToClipboardButton textToCopy="Draft a professional collaboration proposal message for reaching out to another content creator." />
          </div>
          <Separator />
          <div className="flex gap-4 py-4  justify-between">
            Provide advice on diversifying income streams for a lifestyle
            channel through affiliate marketing.
            <CopyToClipboardButton textToCopy="Provide advice on diversifying income streams for a lifestyle channel through affiliate marketing." />
          </div>
          <Separator />
          <div className="flex gap-4 py-4  justify-between">
            Assist in writing a concise and informative script for a tutorial on
            ....
            <CopyToClipboardButton textToCopy="Assist in writing a concise and informative script for a tutorial on ...." />
          </div>
          <Separator />
          <div className="flex gap-4 py-4  justify-between">
            Craft an engaging and suspenseful story snippet for a storytime
            video about ....
            <CopyToClipboardButton textToCopy="Craft an engaging and suspenseful story snippet for a storytime video about ...." />
          </div>
          <Separator />
          <div className="flex gap-4 py-4  justify-between">
            Provide tips and strategies to increase viewer engagement during
            live streams.
            <CopyToClipboardButton textToCopy="Provide tips and strategies to increase viewer engagement during live streams." />
          </div>
        </div>
      </div>
      <div className="bg-zinc-900  rounded-2xl p-6">
        <h1 className="text-zinc-400 text-xl font-bold pb-6">
          Prompts for AI Tools
        </h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500">
          <Separator />
          <div className="flex gap-4 py-4 justify-between">
            Write a script on ....
            <CopyToClipboardButton textToCopy="Write a script on ...." />
          </div>
          <Separator />
          <div className="flex gap-4 py-4  justify-between">
            Write me a eye catchy title on topic ....
            <CopyToClipboardButton textToCopy="Write me a eye catchy title on topic ...." />
          </div>
          <Separator />
          <div className="flex gap-4 py-4  justify-between">
            Generate a drum beat background music.
            <CopyToClipboardButton textToCopy="Generate a drum beat background music." />
          </div>
          <Separator />
          <div className="flex gap-4 py-4  justify-between">
            Write HashTags for my video regarding ....
            <CopyToClipboardButton textToCopy="Write HashTags for my video regarding ...." />
          </div>
          <Separator />
          <div className="flex gap-4 py-4  justify-between">
            Generate optimized description for my upcoming video on ....
            <CopyToClipboardButton textToCopy="Generate optimized description for my upcoming video on ...." />
          </div>
          <Separator />
          <div className="flex gap-4 py-4  justify-between">
            Suggest names for my fitness channel, it should be unique and attractive. 
            <CopyToClipboardButton textToCopy="Suggest names for my fitness channel, it should be unique and attractive." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;
