import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // Auth State Listener
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
  }, [dispatch]);
  const user = useSelector((store) => store.user);
  const userSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <header className="fixed top-0 w-full px-6 py-4 bg-gradient-to-b from-black z-20 flex justify-between items-center">
      <img
        className="w-32 md:w-40 lg:w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />
      {user && (
        <div className="flex items-center space-x-4">
          <img
            className="w-10 h-10 md:w-12 md:h-12 rounded-md"
            src={
              user?.photoURL
                ? user.photoURL
                : "https://occ-0-1946-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
            }
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
