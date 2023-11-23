import { createContext } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    // create a user for email and password based authentication
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login a user with email and password
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

  const authInfo = {
    createUser,
    loginUser,
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
