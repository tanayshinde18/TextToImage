import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'
const Description = () => {
  return (
    <motion.div
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create Images with AI</h1>
      <p className='text-gray-500 mb-8 '>Turn Imagination into Visuals</p>

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center' >

           <img  className='w-80 xl:w-96 rounded-lg' src={assets.sample_img_1} alt="" />

           <div  >

            <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator </h2>
            <p className='text-gray-600 mb-4'>
                Easy to bring your ideas to life without free Ai Image Generator.Whether you need stunning visual or unique imagery, our tool transforms your text into eye catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.
            </p>

            <p   className='text-gray-600' >

                Simply type in a text prompt,and our cutting edge ai will generate high quality images in seconds. From product visuals to character designs and portraits,And even concepts that don't yet exist can be visualised effortlessly.Powered by AI the creative possibilities are limitless.
            </p>
           </div>


      </div>
    </motion.div>
  )
}

export default Description