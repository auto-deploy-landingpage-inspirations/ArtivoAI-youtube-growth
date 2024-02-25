import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";


const LandingFaq = () => {
  return (
    <div id="faq" className="w-full py-20">
        <div className="px-[4vw] text-5xl font-semibold text-zinc-100 ">
            Frequently Asked Questions
        </div>
        <div className="border-t border-zinc-800 mt-12 px-[4vw] flex items-center">
        <div className="bg-zinc-800 border border-red-500 w-full p-10 mt-12 rounded-2xl">
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
    </div>
  )
};

export default LandingFaq;