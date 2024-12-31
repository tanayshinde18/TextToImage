import React, { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
const BuyCredit = () => {
  const { user } = useContext(AppContext);
  return (
    <div className="min-h-[80vh] text-center pt-15 mb-10">
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6">
        Plans and Pricing
      </button>
      <h1 className="text-center text-3xl font-medium mb-6 sm:mb-10">
        Choose the Plan
      </h1>

      <div className="flex justify-center  text-left gap-6  ">
        {plans.map((item, index) => (
          <div
            className="bg-teal-100 
           drop-shadow-sm border rounded-lg py-12 px-8 text-gray-800 hover:scale-105 transition- border-gray-600 duration-500"
            key={index}
          >
            <img width={40} src={assets.logo_icon} alt="" />
            <p className="mt-3 mb-1 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium">${item.price}</span>/
              {item.credits} credits{" "}
            </p>
            <button
              className="w-full bg-gray-700 text-white text-sm rounded-md mt-8 
              hover:bg-gray-950 py-2 min-w-52"
            >
              {" "}
              {user ? "Purchase" : "Get Started"}{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
