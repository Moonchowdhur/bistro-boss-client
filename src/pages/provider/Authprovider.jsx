import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import app from "../../firebase/firebase.config";
import axios from "axios";

export const Authcontext = createContext(null);

const Authprovider = ({ children }) => {
  const auth = getAuth(app);
  const googleprovider = new GoogleAuthProvider();
  const gitprovider = new GithubAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleprovider);
  };

  const gitSignIn = () => {
    return signInWithPopup(auth, gitprovider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("state changed", currentUser);
      setUser(currentUser);

      // if current user exist
      if (currentUser && currentUser?.email) {
        axios
          .post("https://bistro-boss-restaurant-server-roan.vercel.app/jwt", {
            email: currentUser.email,
          })
          .then((data) => {
            console.log(data.data.token);
            localStorage.setItem("access-token", data.data.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
      }

      // axiost part end

      // setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authinfo = {
    user,
    createUser,
    signUser,
    loading,
    resetPassword,
    logOut,
    googleSignIn,
    gitSignIn,
  };

  return (
    <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
  );
};

export default Authprovider;
