import React, {useState} from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
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
        <form className="p-12 bg-black absolute w-3/12 text-white rounded-lg opacity-90">
          <h1 className="font-bold text-3xl p-4">{isSignInForm ? "Sign In":"Sign Up"}</h1>
          {!isSignInForm && <input
            type="text"
            placeholder="Your Name"
            className="p-4 my-4 w-full bg-gray-800 h-12 rounded-lg"
          />}
          <input
            type="text"
            placeholder="Email or Phone"
            className="p-4 my-4 w-full bg-gray-800 h-12 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-800 h-12 rounded-lg"
          />
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In":"Sign Up"}
          </button>
          <p className="cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now": "Already a user? Sign In" }</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
