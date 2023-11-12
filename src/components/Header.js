import React, {useEffect} from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice';
import { BACK_IMG, SUPPORTED_LANGAUGES, USER_IMG } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector(store => store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("signedout")
    }).catch((error) => {
      navigate('/error');
    });
  }

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
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
         { showGPTSearch && (<select className="p-2 bg-blue-400 h-10 w-32 ml-2" onChange={handleLanguageChange}>
          {SUPPORTED_LANGAUGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>)}
        <button className="p-2 bg-blue-400 h-10 w-32 ml-2"
        onClick={handleGptSearchClick}>{showGPTSearch ? "Homepage" :"GPT Search"}</button>
        <img 
        className="w-10 h-10 ml-2"
        src={USER_IMG}
        alt="user" />
        <p className="bg-blue-400 h-10 w-32 p-2" >{user.displayName}</p>
        <button className="bg-blue-400 h-10 w-32 mx-2" onClick={handleSignOut}>Sign Out</button>
      
      </div>}
    </div>
  );
};

export default Header;
