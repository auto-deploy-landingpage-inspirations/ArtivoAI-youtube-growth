import { motion } from "framer-motion";


const LandingMarquee = () => {
  return (
    <div className="w-full py-8 max-md:py-6 bg-red-500">
        <div className="border-y text-zinc-50 border-zinc-100/30 flex overflow-hidden whitespace-nowrap">
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration:20}} className="text-[12vw] max-md:text-[24vw] leading-none uppercase font-semibold tracking-tighter pr-20">research writing titles storytelling</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration:20}} className="text-[12vw] max-md:text-[24vw] leading-none uppercase font-semibold tracking-tighter pr-20">research writing titles storytelling</motion.h1>
        </div>
    </div>
  )
};

export default LandingMarquee;