"use client";

import LandingFooter from "@/components/LandingFooter";
import SimpleNavbar from "@/components/SimpleNavbar";
import ThumbnailEditorPage from "@/components/ThumbnailEditorPage";

const ThumbnailEditor = () => {
    return(
        <div className="w-full">
            <SimpleNavbar/>
            <ThumbnailEditorPage/>
            <LandingFooter/>
        </div>
    )
};
export default ThumbnailEditor;