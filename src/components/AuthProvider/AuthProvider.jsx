import { createContext } from "react";
import PropTypes from "prop-types";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../../../firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

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

  const authInfo = {
    createUser,
    loginUser,
    googleLogin,
    githubLogin
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
