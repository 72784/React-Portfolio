import { CONTACT } from "../constants"
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-40}}
      transition={{duration:1}}
      className="my-10 text-center text-4xl">Get in Touch</motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p         whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:60}}
        transition={{duration:1}}
        className="my-2">{CONTACT.phoneNo}</motion.p>
        <div>
        </div>
        <a href="#" className="border-b my-2">{CONTACT.email}</a>
        
        
      </div>
    </div>
  )
}

export default Contact
