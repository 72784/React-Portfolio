import { Educations } from "../constants"
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.3}}
       className="my-20 text-center text-4xl">Education</motion.h2>
      <div>
        {Educations.map((Education,index)=>(
            <div key={index} className="mb-8 flex slex-wrap lg:justify-center">
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1}}
                 className="w-full lg:w-1/4">
                    <p className="mb-2 text-sm text-neutral-400">{Education.year}</p>
                </motion.div>
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:1}}
                 className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">
                        {Education.degree} 
                        <div className="text-sm text-purple-200">
                            {Education.company}
                        </div>
                        <div className="rounded py-1 text-sm font-medium text-purple-400">
                            GPA : {Education.gpa}/4
                        </div>
                    </h6>
                </motion.div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Education
