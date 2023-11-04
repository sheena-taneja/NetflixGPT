import React, {useState,useRef} from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [isValidationError, setIsValidationError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonOnClick = () => {
    const msg = checkValidData(email.current.value, password.current.value);
    setIsValidationError(msg);
    if(msg) return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName : name.current.value
        })
        .then(() =>{
          const { uid, email, displayName } = auth.currentUser;
          dispatch(addUser({uid,email,displayName}));
          // navigate("/browse");
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(error.message);
        setIsValidationError(errorCode +" : " + errorMessage);
      });
    } else  {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        // navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsValidationError(errorCode +" : " + errorMessage);
      });
    }
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={LOGO}
          alt="backgroundimage"
        />
      </div>
      <div className="flex h-screen items-center justify-center">
        <form onSubmit={((e)=> e.preventDefault())} className="p-12 bg-black absolute w-3/12 text-white rounded-lg opacity-80">
          <h1 className="font-bold text-3xl p-2">{isSignInForm ? "Sign In":"Sign Up"}</h1>
          {!isSignInForm && <input
            ref={name}
            type="text"
            placeholder="Your Name"
            className="p-2 my-2 w-full bg-gray-800 h-12 rounded-lg"
          />}
          <input
            ref={email}
            type="text"
            placeholder="Email or Phone"
            className="p-2 my-2 w-full bg-gray-800 h-12 rounded-lg"
          />
          <input
          ref={password}
            type="password"
            placeholder="Password"
            className="p-2 my-2 w-full bg-gray-800 h-12 rounded-lg"
          />
          <p className="text-red-500 text-lg font-bold p-2">{isValidationError}</p>
          <button className="p-2 my-4 bg-red-700 w-full rounded-lg" onClick={handleButtonOnClick}>
          {isSignInForm ? "Sign In":"Sign Up"}
          </button>
          <p className="cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now": "Already a user? Sign In" }</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
