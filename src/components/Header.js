import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("signedout")
      navigate('/')
    }).catch((error) => {
      navigate('/error');
    });
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-br from-black z-10 flex justify-between">
      <img
        className="w-56 h-32"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && <div className="flex mt-10">
        <img 
        className="w-10 h-10"
        src="https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZBe7K0DPia9LvzIkQ4yzqX9NocZlAjS1MOyEuBQD1WmFuLKZwvq0bxc4n4_EV73khqgwed0PYLNml0V8LCymt31e7x-8jQ.png?r=229"
        alt="user" />
        <p className="bg-blue-400 h-10 w-32 p-2" >{user.displayName}</p>
        <button className="bg-blue-400 h-10 w-32 mx-2" onClick={handleSignOut}>Sign Out</button>
      
      </div>}
    </div>
  );
};

export default Header;
