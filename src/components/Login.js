import React, {useState,useRef} from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [isValidationError, setIsValidationError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonOnClick = () => {
    const msg = checkValidData(email.current.value, password.current.value);
    setIsValidationError(msg);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backgroundimage"
        />
      </div>
      <div className="flex h-screen items-center justify-center">
        <form onSubmit={((e)=> e.preventDefault())} className="p-12 bg-black absolute w-3/12 text-white rounded-lg opacity-80">
          <h1 className="font-bold text-3xl p-2">{isSignInForm ? "Sign In":"Sign Up"}</h1>
          {!isSignInForm && <input
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
