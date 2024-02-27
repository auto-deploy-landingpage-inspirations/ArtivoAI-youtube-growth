"use client";
import LandingFooter from "@/components/LandingFooter";
import LandingPricing from "@/components/LandingPricing";
import PricingNavbar from "@/components/PricingNavbar";

const PricingPage = () => {
    return (
        <div className="w-full overflow-hidden">
            <PricingNavbar/>
            <LandingPricing/>
            <LandingFooter/>
        </div>
    )
};

export default PricingPage;