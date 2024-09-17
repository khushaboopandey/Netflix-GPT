import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USERAVTAR } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // Auth State Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Destructure properties from the user object
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when my component mount
    return () => unsubscribe();
  }, [dispatch]);
  const user = useSelector((store) => store.user);
  const userSignOut = () => {
    signOut(auth)
      .then(() => { })
      .catch((error) => {
        navigate("/error");
      });
  };

  const toggleSearch = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <header className="fixed top-0 w-full px-6 py-4 bg-gradient-to-b from-black z-20 flex justify-between items-center">
      <img className="w-32 md:w-40 lg:w-48" src={LOGO} alt="Netflix Logo" />
      {user && (
        <div className="flex items-center space-x-4">
          {showGptSearch && <select className="p-2 bg-gray-900 text-white rounded" onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="hindi">Hindi</option>
            <option value="spanish">Spanish</option>
          </select>}
          <button className="py-2 px-4 mx-2 bg-purple-800 text-white rounded" onClick={toggleSearch} >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img
            className="w-10 h-8 md:w-12 md:h-12 rounded-md"
            src={USERAVTAR}
            alt="User Avatar"
          />
          <button
            className="font-bold text-white bg-red-600 hover:bg-red-700 p-2 rounded-md"
            onClick={userSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
