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
      .then(() => {})
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
    <div className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-4 z-20 bg-gradient-to-b from-black/70 to-transparent">
      <img className="w-32" src={LOGO} alt="Netflix logo" />
      {user && (
        <div className="flex items-center space-x-4">
          <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="User avatar" />
          <button onClick={handleSignOut} className="text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
