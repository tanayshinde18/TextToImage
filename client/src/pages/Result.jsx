import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Result = () => {
 const[image,setImage ]=useState(assets.sample_img_1);
 const[isImageLoaded, setisImageLoaded]=useState(false);
 const[loading,setLoading]=useState(false);
const[input,setInput]=useState('');
const onSubmitHandler=async(e)=>{

}

  return (
    <form onSubmit={onSubmitHandler}  className='flex flex-col min-h-[90vh] justify-center items-center '  action="">
    <div>
      
      <div className='relative '>
        <img src={image} alt="" className='maax-w-sm rounded'/>
         <span  className={`absolute bottom-0 left-0 h-1 bg-blue-600 ${loading? 'w-fll transition-all duration-[10s]': 'w-0'}`}/>

      </div>
      <p className={!loading? 'hidden':''}>Loading......</p>

      
    </div>

      {!isImageLoaded && 
    <div className='flex w-full max-w-xl bg-neutral-600 text-sm p-0.5 mt-10 rounded-full'>
      <input  
      onChange={e=>{ setInput(e.target.value)}}  value={input} type="text" placeholder='Enter your Prompt ' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color ' />
      <button type='submit'
      className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full text-gray-100'>
      Generate</button>
    </div>
}
{isImageLoaded && 
    <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full '>
      <p  onClick={()=>{setisImageLoaded(false)}} className='bg-transparent border border-zinc-800 text-black px-10 py-3 rounded-full cursor-pointer'>Generate Another</p>
      <a download className='bg-zinc-800 px-10 py-3 rounded-full cursor-pointer' 
      href={image}>Download</a>
    </div>

}
    </form>

  )
}

export default Result
