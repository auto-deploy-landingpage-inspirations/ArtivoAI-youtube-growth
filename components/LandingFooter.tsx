const LandingFooter = () => {
  return (
    <div id="footer" className="w-full bg-red-500">
      <div className="px-[4vw] w-full flex max-md:flex-col max-md:text-center gap-8 justify-between py-12">
      <div className="text-zinc-900 tracking-tighter font-semibold text-sm flex flex-col gap-4">
            <h1 className="text-3xl font-extrabold">Contact Us</h1>
            <h1 className="">Amar Nagar C, Jaipur, Rajasthan (302012) </h1>
            <h1>artivo.ai@gmail.com</h1>
        </div>
        <div className="text-zinc-900 tracking-tighter font-semibold text-sm flex flex-col gap-4">
            <h1 className="text-3xl font-extrabold">Social Accounts</h1>
            <h1>Instagram</h1>
            <h1>Twitter</h1>
            <h1>Youtube</h1>
        </div>
        
        <div className="text-zinc-900 tracking-tighter font-semibold text-sm flex flex-col gap-4">
            <h1 className="text-3xl font-extrabold">Menu</h1>
            <h1>AI Tools</h1>
            <h1>Pricing</h1>
            <h1>About</h1>
            <h1>FAQ</h1>
        </div>
        <div className="text-zinc-900 tracking-tighter font-semibold text-sm flex flex-col gap-4">
            <h1 className="text-3xl font-extrabold">Legal Links</h1>
            <h1>Terms of service</h1>
            <h1>Privacy Policy</h1>
            <h1>Refund Policy</h1>
            <h1>User Security</h1>
        </div>
      </div>
      <div className="py-6 border-t-2 border-zinc-800 flex max-md:flex-col max-md:text-center justify-between text-zinc-900 font-bold px-[4vw]">
        <div>© 2024 ArtivoAI. All rights reserved.</div>
        <div>Made in India with Love.</div>
      </div>
    </div>
  );
};

export default LandingFooter;
