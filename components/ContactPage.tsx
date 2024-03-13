import { Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const ContactPageComponent = () => {
  return (
    <div className="w-full bg-zinc-50 px-[4vw] py-32 flex flex-col gap-12 items-center">
      <div className="w-full flex flex-col gap-4 items-center px-[4vw]">
        <h1 className="text-zinc-900 text-4xl text-center font-bold">
          How can we help you ?
        </h1>
        <h1 className="text-zinc-700 text-xl font-light">Get in Touch</h1>
      </div>
      <div className="w-1/3 max-md:w-full bg-zinc-200 border border-zinc-300 space-y-12 rounded-2xl p-6">
        <div>
          <h1 className="text-zinc-600 font-light text-lg">Email Address</h1>
          <Link href={"mailto:artivo.ai@gmail.com"}>
          <h1 className="text-zinc-900 font-bold text-2xl">
            artivo.ai@gmail.com
          </h1>
          </Link>
        </div>
        <div>
          <h1 className="text-zinc-600 font-light text-lg">Address</h1>
          <h1 className="text-zinc-900 font-bold text-2xl">
            Amar Nagar C, Jaipur, Rajasthan, India (302012)
          </h1>
        </div>
        <div className="flex gap-4 text-zinc-900">
          <h1 className="text-zinc-600 font-light text-lg transition-all">
            Social Links :
          </h1>
          <Link href={"https://www.instagram.com/artivoai/"} target="_blank">
            <Instagram className="hover:text-pink-600" />
          </Link>
          <Link href={"https://www.youtube.com/@ArtivoAI"} target="_blank">
            <Youtube className="hover:text-red-500" />
          </Link>
          <Link href={"https://twitter.com/artivoAI"} target="_blank">
            <Twitter className="hover:text-sky-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ContactPageComponent;
