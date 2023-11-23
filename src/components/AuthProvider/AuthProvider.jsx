import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import auth from "../../../firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);

    // create a user for email and password based authentication
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login a user with email and password
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signinwithGoogle
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // signinwihtGithub
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    // update profile of a user 
    const updateUserinfo  = (name, photo) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
      })
    }

    // overserver function to grab the currentUser
    useEffect( () => {
     const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
      });
      return () =>{
        unsubscribe();
      }
    }, [])


  const authInfo = {
    createUser,
    loginUser,
    googleLogin,
    githubLogin,
    updateUserinfo,
    user
  };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};
export default AuthProvider;
