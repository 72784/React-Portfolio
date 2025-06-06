import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import {FaAngular} from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { SiDotnet } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

import { motion } from "framer-motion";
const iconVariants = (duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0 ,y:-100}}
      transition={{duration:1.3}} className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.3}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>

        <motion.div 
                        variants={iconVariants(2)}
                        initial="initial"
                        animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-500"/>
        </motion.div>
        <motion.div 
                        variants={iconVariants(4)}
                        initial="initial"
                        animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-500"/>
        </motion.div>
        <motion.div 
                        variants={iconVariants(1)}
                        initial="initial"
                        animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaAngular className="text-7xl text-sky-700"/>
        </motion.div>
        <motion.div 
                        variants={iconVariants(5)}
                        initial="initial"
                        animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiMsqlServer className="text-7xl text-sky-700"/>
        </motion.div>
        <motion.div 
                        variants={iconVariants(2)}
                        initial="initial"
                        animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiDotnet className="text-7xl text-purple-700"/>
        </motion.div>
        <motion.div 
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPython className="text-7xl text-yellow-700"/>
        </motion.div>
        <motion.div 
                        variants={iconVariants(8)}
                        initial="initial"
                        animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiJavascript1 className="text-7xl text-yellow-700"/>
        </motion.div>
        <motion.div 
                        variants={iconVariants(5)}
                        initial="initial"
                        animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJava className="text-7xl text-red-700"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
