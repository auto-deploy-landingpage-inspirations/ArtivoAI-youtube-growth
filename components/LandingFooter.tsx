import Link from "next/link";
import RazorpayButton from "./RazorpayButton";

const LandingFooter = () => {
  return (
    <div id="footer" className="w-full bg-zinc-800">
      <div className="px-[4vw] w-full flex max-md:flex-col max-md:text-center gap-8 justify-between py-12">
        <div className="text-zinc-400 font-light md:text-justify md:w-1/2 gap-4 flex flex-col">
          <h1 className="text-3xl text-zinc-200 font-extrabold">
            artivo<span className="text-red-500">AI.</span>
          </h1>
          <h1 className="max-md:text-justify">
            Our goal is to equip every content creator with the knowledge and
            motivation essential for their growth. We are dedicated to
            delivering a dynamic blend of cutting-edge technology and human
            insight, elevating your efficiency and increasing your viewership.
            No matter the obstacle ahead, we are committed to illuminating the
            path to your success.
          </h1>
        </div>
        <div className="text-zinc-400 tracking-tighter font-light text-sm flex flex-col gap-4">
          <h1 className="text-2xl text-zinc-200 font-bold">Connect With Us</h1>
          <Link href={"mailto:artivo.ai@gmail.com"}>
            <h1>artivo.ai@gmail.com</h1>
          </Link>
          <Link href={"https://www.instagram.com/artivoai/"} target="_blank">
            <h1>Instagram</h1>
          </Link>
          <Link href={"https://twitter.com/artivoAI"} target="_blank">
            <h1>Twitter</h1>
          </Link>
          <Link href={"https://www.youtube.com/@ArtivoAI"} target="_blank">
            <h1>Youtube</h1>
          </Link>
        </div>
        <div className="text-zinc-400 tracking-tighter font-light text-sm flex flex-col gap-4">
          <h1 className="text-2xl text-zinc-200 font-bold">Other</h1>
          <Link href={"/contact-us"}>
            <h1>Contact Us</h1>
          </Link>
          <Link href={"/terms-of-service"}>
            <h1>Terms of service</h1>
          </Link>
          <Link href={"/privacy-policy"}>
            <h1>Privacy Policy</h1>
          </Link>
          <Link href={"/cancellation-and-refund-policy"}>
            <h1>Cancellation & Refund Policy</h1>
          </Link>
        </div>
      </div>
      <div className="py-6 gap-4 bg-zinc-900 flex max-md:flex-col max-md:text-center justify-between items-center text-zinc-500 font-light px-[4vw]">
        <div>© 2024 artivoAI. All rights reserved.</div>

        <div>
          <span className="text-orange-500">Made </span>
          <span className="text-zinc-100">in</span>
          <span className="text-green-500"> India.</span>
        </div>
        <RazorpayButton />
      </div>
    </div>
  );
};

export default LandingFooter;
