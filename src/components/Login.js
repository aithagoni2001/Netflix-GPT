import React, { useState, useRef } from "react";
import Header from "./Header";
import { CheckValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser} from '../utils/userSlice';


export const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleClickValidate = () => {
    // Safely accessing values from refs
    // console.log(email)
    // console.log(password);
    const message = CheckValidateData( email.current.value, password.current.value);
    setErrMsg(message);
    if(message) return;

    if (!isSignIn) {
      // signUp logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName:name.current.value, photoURL: "https://avatars.githubusercontent.com/u/165911850?v=4"
    }).then(() => {
      const {uid, email, displayName,photoURL} = auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
      navigate("/browse")
      
    }).catch((error) => {
      setErrMsg(error.message)
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMsg(errorCode +" "+ errorMessage)
  });

    } else {
      // signIn logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMsg(errorCode +" "+ errorMessage)
  });

      
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
    setErrMsg(null); // Clear error message on toggle
  };

  return (
    <div>
      <Header />
      <div className="relative">
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg"
          alt="netflix-bg-IMG"
        />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute h-[500px] bg-black mx-[450px] my-32 text-white px-10 py-4 rounded-lg bg-opacity-80"
        >
          <h1 className="text-3xl font-bold text-white my-7">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-80 py-3 px-2 my-2 bg-gray-800"
            />
          )}
          <br />
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="w-80 py-3 px-2 my-2 bg-gray-800"
          />
          <br />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-80 py-3 px-2 my-2 bg-gray-800"
          />
          <p className="text-lg font-semibold text-red-600">{errMsg}</p>
          <br />
          <button
            className="bg-red-600 mt-5 rounded-lg p-2 font-semibold w-full cursor-pointer"
            onClick={handleClickValidate}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="mx-[100px] my-1 mb-10">
            {isSignIn ? "Forgot password?" : ""}
          </p>
          <p
            className="mb-2 font-semibold cursor-pointer"
            onClick={toggleSignIn}
          >
            {isSignIn
              ? "New to Netflix? Sign Up Now."
              : "Already Registered! Sign In."}
          </p>
        </form>
      </div>
    </div>
  );
};