import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/Firebase.init";

const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, useLoading] = useState(true);
  // google login
  const handleGoogleLogin = () => {
    useLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //   email login
  const loginWithEmail = (email, password) => {
    useLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   register with email
  const emailRegistration = (email, password) => {
    useLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update profile
  const updateProfileNamePhoto = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
        useLoading(true);
      }
      useLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    handleGoogleLogin,
    loginWithEmail,
    emailRegistration,
    user,
    loading,
    updateProfileNamePhoto,
    setUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
