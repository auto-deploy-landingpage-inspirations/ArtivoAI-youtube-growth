"use client";
import ContactPageComponent from "@/components/ContactPage";
import LandingFooter from "@/components/LandingFooter";
import SimpleNavbar from "@/components/SimpleNavbar";

const ContactPage =()=>{
    return(
        <div className="w-full">
            <SimpleNavbar/>
            <ContactPageComponent/>
            <LandingFooter/>
        </div>
    )
};
export default ContactPage;