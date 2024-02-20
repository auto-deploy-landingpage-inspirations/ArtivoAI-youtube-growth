"use client";

import * as z from "zod";

import { Music } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import OpenAI from "openai";
import axios from 'axios';


import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import { formSchema } from "./constants";
import { useProModal } from "@/hooks/use-pro-modal";
import toast from "react-hot-toast";

type ExtendedMessage = OpenAI.ChatCompletionMessage & { role: "user" | "assistant" | string };



const MusicPage = () => {

  const proModal = useProModal();
  
  const router = useRouter();

  const [music, setMusic] = useState<string>();


 
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  });

  // Checking if the form is currently being submitted
  const isLoading = form.formState.isSubmitting;
  
  // Function to handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
     setMusic(undefined);
      
   
      const response = await axios.post('/api/music', values);

      setMusic(response.data.audio);
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went Wrong");
      }
    } finally {
      router.refresh();
    }
  }

  // Render function for the component
  return ( 
    <div>
      <Heading
        title="Music Generation"
        description="Transform your content into sonic masterpieces with our AI Music Generator."
        icon={Music}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-900/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="
                rounded-2xl 
                
                bg-zinc-900 
                w-full 
                p-4 
                px-3 
                md:px-6 
                grid
                grid-cols-12
                gap-2
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 pl-2 rounded-2xl bg-zinc-900 text-zinc-100">
                      <Input
                        className=" border-0  outline-none placeholder:text-zinc-500"
                        disabled={isLoading} 
                        placeholder="Piano Solo." 
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="bg-emerald-900 rounded-2xl hover:bg-zinc-950 col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
                Generate
              </Button>
            </form>
          </Form>
        </div>

        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8  bg-zinc-900 rounded-2xl w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {!music && !isLoading && (
            <Empty label="No music generated." />
          )}
          <div>
          {music && (
          <audio controls className="w-full mt-8">
            <source src={music} />
          </audio>
        )}
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default MusicPage;