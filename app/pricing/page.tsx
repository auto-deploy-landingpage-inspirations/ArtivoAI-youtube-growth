"use client";
import LandingFooter from "@/components/LandingFooter";
import LandingPricing from "@/components/LandingPricing";
import SimpleNavbar from "@/components/SimpleNavbar";

const PricingPage = () => {
    return (
        <div className="w-full overflow-hidden">
            <SimpleNavbar/>
            <LandingPricing/>
            <LandingFooter/>
        </div>
    )
};

export default PricingPage;