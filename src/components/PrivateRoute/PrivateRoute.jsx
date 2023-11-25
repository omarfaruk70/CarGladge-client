import { useContext } from "react";
import PropTypes from 'prop-types';
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <span className="loading bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90 w-40 md:w-52 lg:w-60"></span>
        ;
      </div>
    );
  }
  if (!user?.email) {
    return <Navigate to={"/login"} state={location.pathname}></Navigate>;
  }
  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node
}
export default PrivateRoute;
