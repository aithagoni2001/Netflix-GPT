import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { LOGO } from "../utils/Constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { uid, email, displayName, photoURL } = currentUser;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
   <div className="bg-black ">
    <div className="absolute my-0 mx-20  bg-gradient-to-b z-10 from-black">
      <img className="w-48  "
        src={LOGO}
        alt="netflix logo"
      /> </div>
      {user && (
        <div className="flex mx-10 justify-end text-white">
          <img
            className="w-10 my-5 rounded-lg h-10"
            src={user?.photoURL}
            alt="user avatar"
          />
          <button onClick={handleSignOut} className="text-white px-3">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
