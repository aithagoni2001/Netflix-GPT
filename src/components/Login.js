import React, { useState, useRef } from "react";
import { CheckValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from '../utils/userSlice';
import Header from "./Header";
import { BG_NETFLIX_LOGO, USER_AVATAR } from "../utils/Constants";


export const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const dispatch = useDispatch();


  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleClickValidate = () => {
    const message = CheckValidateData(email.current.value, password.current.value);
    setErrMsg(message);
    if (message) return;

    if (!isSignIn) {
      // Sign-Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid, email, displayName, photoURL }));
          }).catch((error) => {
            setErrMsg(error.message);
          });
        })
        .catch((error) => {
          setErrMsg(error.code + " " + error.message);
        });
    } else {
      // Sign-In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({ uid, email, displayName, photoURL }));
        })
        .catch((error) => {
          setErrMsg(error.code + " " + error.message);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
    setErrMsg(null);
  };

  return (
    <div>
      <div className=""><Header/></div>
     
      <div className="relative">
        <img
          className="absolute"
          src={BG_NETFLIX_LOGO}
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
