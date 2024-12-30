import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-stone-500 inline-flex text-center gap 2 bg-white px-6 py-1  mt-10 rounded-full border border-neutral-500 ">
        <p>The Perfect text to image generator</p>
        <img src={assets.star_icon} alt="" />
      </div>
      <h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center">
        Turns your words to <span className="text-teal-600">images</span> in
        seconds..
      </h1>
      <p className="text-center max-w-xl mx-auto mt-5  ">
        {" "}
        Cnleash your creativity with AI. Just type and watch the magic happen.
      </p>

      <button className="sm:text-lg text-white bg-cyan-700 w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full">
        Generate Images
        <img className="h-6" src={assets.star_group} alt="" />
      </button>

      <div className="flex flex-wrap justify-center mt-16 gap-3">
        {Array(6)
          .fill("")
          .map((item, index) => (
            <img
              className="rounded hover:transition-all duration-300 cursor-pointer max-sm:w-10 "
              src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
              key={index}
              width={70}
            />
          ))}
      </div>

      <p className="mt-2 text-neutral-600">
        Generated images by &lt;your name here &gt;
      </p>
    </div>
  );
};

export default Header;
