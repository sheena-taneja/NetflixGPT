import React, {useEffect} from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice';
import { BACK_IMG, USER_IMG } from "../utils/constants";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("signedout")
    }).catch((error) => {
      navigate('/error');
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({uid,email,displayName}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-br from-black z-10 flex justify-between">
      <img
        className="w-56 h-32"
        src={BACK_IMG}
        alt="logo"
      />
      {user && <div className="flex mt-10">
        <img 
        className="w-10 h-10"
        src={USER_IMG}
        alt="user" />
        <p className="bg-blue-400 h-10 w-32 p-2" >{user.displayName}</p>
        <button className="bg-blue-400 h-10 w-32 mx-2" onClick={handleSignOut}>Sign Out</button>
      
      </div>}
    </div>
  );
};

export default Header;
