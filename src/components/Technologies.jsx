import { RiReactjsLine } from "react-icons/ri";
import { TbBrandTailwind } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNode } from "react-icons/fa6";
import { TbBrandMysql } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) =>({
  initial: { y : -10},
  animate : {
    y:[10,-10],
    transition : {
      duration : duration,
      ease : "linear",
      repeat : Infinity,
      repeatType : "reverse"
    },
  }
})


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24" >
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial ={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl "> Technologies </motion.h2>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial ={{opacity:0,x:-100}}
      transition={{duration:1.5}}

      className="flex flex-wrap items-center justify-center gap-4" >
          <motion.div
          variants={iconVariants(2.5)} 
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"  />
          </motion.div>

          <motion.div
          variants={iconVariants(3)} 
          initial="initial"
          animate="animate" 
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandTailwind className="text-7xl text-sky-500"  />
          </motion.div>

          <motion.div
          variants={iconVariants(5)} 
          initial="initial"
          animate="animate" 
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-500"  />
          </motion.div>

          <motion.div
          variants={iconVariants(2)} 
          initial="initial"
          animate="animate"
           className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiRedis className="text-7xl text-red-700"  />
          </motion.div>

          <motion.div
          variants={iconVariants(6)} 
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNode className="text-7xl text-green-500"  />
          </motion.div>

          <motion.div
          variants={iconVariants(4)} 
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandMysql className="text-7xl text-sky-700"  />
          </motion.div>

          <motion.div
          variants={iconVariants(7)} 
          initial="initial"
          animate="animate" 
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandJavascript className="text-7xl text-orange-400" />
          </motion.div>

          <motion.div
          variants={iconVariants(4)} 
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaGitAlt className="text-7xl text-orange-700" />
          </motion.div>

          <motion.div 
          variants={iconVariants(3)} 
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaGithub className="text-7xl " />
          </motion.div>

      </motion.div>
    </div>
  );
};

export default Technologies;
