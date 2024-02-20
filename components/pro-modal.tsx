"use client";

import axios from "axios";
import { useState } from "react";
import { Bot, Check, Hash, ListVideo, MessageSquare, Music, Tv2, YoutubeIcon, Zap } from "lucide-react";
import { toast } from "react-hot-toast";

import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/use-pro-modal";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";


const tools = [
    {
      label: "AI Mentor",
      icon: Bot,
      color: "text-yellow-600",
      bgColor: "bg-yellow-900/10",
      href: "/coach",
    },
    {
      label: "Script Generator",
      icon: MessageSquare,
      color: "text-rose-600",
      bgColor: "bg-rose-900/10",
      href: "/conversation",
    },
    {
      label: "Youtube Title Generator",
      icon: YoutubeIcon,
      color: "text-red-600",
      bgColor: "bg-red-900/10",
      href: "/title",
    },
    {
      label: "Tags Generator",
      icon: Hash,
      color: "text-orange-600",
      bgColor: "bg-orange-900/10",
      href: "/tags",
    },
    {
      label: "Description Generator",
      icon: ListVideo,
      color: "text-indigo-600",
      bgColor: "bg-indigo-900/10",
      href: "/description",
    },
    {
      label: "Channel Name Generator",
      icon: Tv2,
      color: "text-amber-600",
      bgColor: "bg-amber-900/10",
      href: "/name",
    },
    {
      label: "Music Generator",
      icon: Music,
      color: "text-emerald-500",
      bgColor: "bg-emerald-900/10",
      href: "/music",
    },
  ];

export const ProModal = () => {
  const proModal = useProModal();
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
  }

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent className="bg-zinc-950 border-0">
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center text-zinc-200 gap-x-2 font-bold text-xl">
              Upgrade to ArtivoAI
              <Badge variant="premium" className="uppercase text-sm py-1">
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-200 font-medium">
            {tools.map((tool) => (
              <Card key={tool.href} className="p-3 border-0 bg-zinc-900 text-zinc-200 flex items-center justify-between">
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-6 h-6", tool.color)} />
                  </div>
                  <div className="font-semibold text-sm">
                    {tool.label}
                  </div>
                </div>
                <Check className="text-zinc-200 w-5 h-5" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button disabled={loading} onClick={onSubscribe} size="lg" variant="premium" className="rounded-2xl w-full">
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};