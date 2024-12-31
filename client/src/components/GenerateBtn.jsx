import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const GenerateBtn = () => {
  


  
 

  return (
    <motion.div
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='pb-16 text-center'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16'>Lets Start..</h1>
      <button
     
      className='inline-flex items-center gap-2 px-12 py-3  rounded-full bg-cyan-800 text-white m-auto hover:scale-105 transition-all duration-500'>
        
        Start Generating !!
        <img src={assets.star_group} alt="" className='h-6' />
      </button>
    </motion.div>
  )
}

export default GenerateBtn
