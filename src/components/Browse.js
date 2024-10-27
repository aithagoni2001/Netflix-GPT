import React from "react";
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Browse = () => {
  const user = useSelector(store=>store.user)
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
      <div>
        <img
          className="w-48  "
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix logo"
        />
      </div>
      {user &&<div className="flex mx-10">
        <img
          className="w-10 my-5 rounded-lg h-10"
          src={user?.photoURL}
          alt="netflix-user-logo"
        />
        <button onClick={handleSignOut} className="text-white px-3">
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Browse;
