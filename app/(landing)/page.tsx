"use client";
import LandingNavbar from "@/components/LandingNavbar";
import LandingHero from "@/components/LandingHero";
import LandingMarquee from "@/components/LandingMarquee";
import LandingAbout from "@/components/LandingAbout";
import LandingTools from "@/components/LandingTools";
import LandingFaq from "@/components/LandingFaq";
import LandingLastBlock from "@/components/LandingLastBlock";
import LandingFooter from "@/components/LandingFooter";

const LandingPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <LandingNavbar />
      <LandingHero />
      <LandingMarquee />
      {/* <LandingAbout /> */}
      <LandingTools />
      <LandingFaq />
      <LandingLastBlock />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
