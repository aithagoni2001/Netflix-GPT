import React from "react";
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const navigate = useNavigate()
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        navigate("/error")
      });
  };
  return (
    <div className="bg-black w-screen flex justify-between">
      <div className="">
        <img
          className="w-48  "
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix logo"
        />
      </div>
      <div className="flex mx-10">
        <img
          className="w-10 my-5  h-10"
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          alt="netflix-user-logo"
        />
        <button onClick={handleSignOut} className="text-white px-5">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Browse;
