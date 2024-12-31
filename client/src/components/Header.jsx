import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react"
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const{user,setShowLogin}=useContext(AppContext)
  const navigate=useNavigate()
  const onClickHandler = ()=>{
    
    if(user){
      navigate('/result')
    }
    else{
      setShowLogin(true)
    }
  }

  return (
    <motion.div className="flex flex-col justify-center items-center text-center my-20 
     "
      initial={{opacity:0.2, y:100}}
      transition={{duration:1}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      >
      <motion.div className="text-stone-500 inline-flex text-center gap 2 bg-white px-6 py-1  mt-3 rounded-full border border-neutral-500"
      initial={{opacity:0, y:-20}}
      
      animate={{opacity:1,y:0}}
      transition={{delay:0.2, duration:0.8}}
      viewport={{once:true}}
      >
        <p>The Perfect text to image generator</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>
      <motion.h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-4 text-center"
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:0.4,duration:2}}
      
      viewport={{once:true}}
      >
        Turns your words to <span className="text-teal-600">images</span> in
        seconds..
      </motion.h1>
      <motion.p className="text-center max-w-xl mx-auto mt-5  "
      
      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      transition={{delay:0.4,duration:1.2}}
      
      >
        
        Unleash your creativity with AI. Just type and watch the magic happen.
      </motion.p>

      <motion.button className="sm:text-lg text-white bg-cyan-700 w-auto mt-5 px-12 py-2.5 flex items-center gap-2 rounded-full "
      whileHover={{scale:1.05 }}
      whileTap={{scale:0.95 }}
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{default:{duration:0.5}, opacity:{delay:0.8, duration:1 }}}
      
      onClick={onClickHandler}
      >
        Generate Images
        <img className="h-6" src={assets.star_group} alt="" />
      </motion.button>

      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1, duration:1}}
      className="flex flex-wrap justify-center mt-8 gap-3 ">
        {Array(6)
          .fill("")
          .map((item, index) => (
            <motion.img
              whileHover={{scale:1.05,duration:0.1}}
              className="rounded  transition-all cursor-pointer max-sm:w-10 "
              src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
              key={index}
              width={70}
            />
          ))}
      </motion.div>

      <motion.p
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1.2,duration:0.8}}
      className="mt-8 text-neutral-600">
        Generated images by &lt;your name here &gt;
      </motion.p>
    </motion.div>
  );
};

export default Header;
