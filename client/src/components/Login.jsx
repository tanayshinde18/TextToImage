import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";
const Login = () => {
  const [state, setSate] = useState("Login");
  useEffect(() => {
    document.body.style.overflow='hidden';
    return()=>{
        document.body.style.overflow='unset';
    }
  }, []);
  const {setShowLogin}=useContext(AppContext);
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center ">
      <motion.form
      
      initial={{ opacity: 0.2, y:50 }}
      transition={{duration:0.3}}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{once:true}}

      className="relative bg-white p-10 rounded-xl text-slate-500">
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state}
        </h1>
        <p className="text-sm mt-3">
          Welcome back! Please {state} in To Continue
        </p>

        {state !== "Login" && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
            <img className="h-5" src={assets.user_icon} alt="" />
            <input
              className="outline-none text-sm"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
        )}

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
          <img className="" src={assets.email_icon} alt="" />
          <input
            className="outline-none text-sm"
            type="email"
            placeholder="Email Address"
            required
          />
        </div>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img className="" src={assets.lock_icon} alt="" />
          <input
            className="outline-none text-sm"
            type="Password"
            placeholder="Password"
            required
          />
        </div>
        <p className="text-sm text-blue-600 my-4  cursor-pointer">
          Forgot Password
        </p>
        <button className="bg-blue-600 w-full text-white py-2 rounded-full">
          {state === "Login" ? "Login" : "Create Account"}
        </button>

        {state === "Login" ? (
          <p className="mt-5 text-center">
            Dont have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setSate("Sign Up")}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer "
              onClick={() => setSate("Login")}
            >
              Login
            </span>
          </p>
        )}

        <img
          className="absolute top-5 right-5 cursor-pointer"
          onClick={()=>setShowLogin(false)}
          src={assets.cross_icon}
          alt=""
        />
      </motion.form>
    </div>
  );
};

export default Login;
