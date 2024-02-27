import { Instagram, Twitter, Youtube } from "lucide-react";

const ContactPageComponent = () => {
    return(
        <div className="w-full px-[4vw] py-32 flex flex-col gap-12 items-center">
            <div className="w-full flex flex-col gap-4 items-center px-[4vw]">
                <h1 className="text-zinc-200 text-4xl text-center font-bold">How can we help you ?</h1>
                <h1 className="text-zinc-400 text-xl font-light">Get in Touch</h1>
            </div>
            <div className="w-1/3 max-md:w-full bg-zinc-800 space-y-12 rounded-2xl p-6">
                <div>
                <h1 className="text-zinc-500 font-light text-lg">Email Address</h1>
                <h1 className="text-zinc-300 font-bold text-2xl">artivo.ai@gmail.com</h1>
                </div>
                <div>
                <h1 className="text-zinc-500 font-light text-lg">Address</h1>
                <h1 className="text-zinc-300 font-bold text-2xl">Amar Nagar C, Jaipur, Rajasthan, India (302012)</h1>
                </div>
                <div className="flex gap-4 text-zinc-300">
                <h1 className="text-zinc-500 font-light text-lg transition-all">Social Links :</h1>
                    <Instagram className="hover:text-pink-600"/>
                    <Youtube className="hover:text-red-500"/>
                    <Twitter className="hover:text-sky-500"/>
                </div>
            </div>
        </div>
    )
};
export default ContactPageComponent;