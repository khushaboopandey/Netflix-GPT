import React, { useRef, useState } from "react";
import Header from "./Header";
import { updateProfile } from "firebase/auth";

import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USERAVTAR } from "../utils/constant";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch((store) => store.user);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const errorMsg = checkValidData(
      email.current.value,
      password.current.value
    );
    setErrorMsg(errorMsg);
    if (errorMsg) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USERAVTAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMsg(error);
            });
        })
        .catch((error) => {
          setErrorMsg(`${error.code} - ${error.message}`);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          setErrorMsg(`${error.code} - ${error.message}`);
        });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center  ">
      <Header />
      <img
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"
        alt="background img"
      />
      <form
        className="w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 p-10 bg-black bg-opacity-75 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4 text-white">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-3 my-4 w-full bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-3 my-4 w-full bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
        />
        {errorMsg && (
          <p className="text-red-500 font-bold text-sm py-2">{errorMsg}</p>
        )}
        <button
          className="p-4 my-6 w-full bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-3 text-center cursor-pointer text-red-500"
          onClick={toggleSignInForm}
        >
          {isSignIn
            ? "New to Netflix? Sign Up now."
            : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
