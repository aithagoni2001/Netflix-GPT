import React, { useState } from "react";
import Header from "./Header";

export const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true)

  const toggleSignIn =()=>{
    setIsSignIn(!isSignIn)
  }
  return (
    <div>
      <Header />
      <div className="relative">
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg"
          alt="netflix-bg-IMG"
        />
        <form className="absolute h-[480px] bg-black mx-[450px] my-32 text-white px-10 py-4 rounded-lg bg-opacity-80">
          <h1 className="text-3xl font-bold text-white my-7">{isSignIn?"Sign In":"Sign Up"}</h1>
          {!isSignIn &&<input type="text" placeholder="Full Name" className="w-80 py-3 px-2 my-2 bg-gray-800" />}
          <br />
          {!isSignIn &&<input type="Number" placeholder="Mobile Number" className="w-80 py-3 px-2 my-2 bg-gray-800" />}
          <br />
          {!isSignIn && <input
            type="password"
            placeholder="one-time-password"
            className="w-80 py-3 px-2 my-2 bg-gray-800"
          />}
         
          
          {isSignIn &&<input type="text" placeholder="Email" className="w-80 py-3 px-2 my-2 bg-gray-800" />}
          <br />
          {isSignIn &&<input
            type="password"
            placeholder="Password"
            className="w-80 py-3 px-2 my-2 bg-gray-800"
          />}
          <br />
          <button className="bg-red-600  mt-5 rounded-lg p-2 font-semibold w-full cursor-pointer ">
          {isSignIn?"Sign In":"Sign Up"}
          </button>
          <p className="mx-[100px] my-1 mb-10"> {isSignIn?"Forgot password?":""}</p>
          <p className="mb-2 font-semibold cursor-pointer"onClick={toggleSignIn}> {isSignIn? "New to Netflix? Sign Up Now.":"Already Registered! Sign In."}</p>
        </form>
      </div>
    </div>
  );
};
