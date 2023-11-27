import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaMoon } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mode, setMode] = useState('light');

  const changeMode = () => {
    const documentElement = document.documentElement; //documentElement Means full Doctype html.
    if(mode === 'light'){
      documentElement.classList.add('dark');
      documentElement.classList.remove('light');
      setMode('dark');
      localStorage.setItem('mode', 'dark')
    }
    else{
      documentElement.classList.add('light');
      documentElement.classList.remove('dark');
      setMode('light');
      localStorage.setItem('mode', 'light')
    }
  }

  useEffect(() => {
    const currentMode = localStorage.getItem('mode') || 'light';
    document.documentElement.classList.add(currentMode);
    setMode(currentMode);
  }, [])

  const logoutUser = () => {
    logOut().then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User log out",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  const li = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white bg-gradient-to-r from-cyan-500 to-blue-500 font-bold "
              : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white bg-gradient-to-r from-cyan-500 to-blue-500 font-bold"
              : ""
          }
          to={"/addproduct"}
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white bg-gradient-to-r from-cyan-500 to-blue-500 font-bold"
              : ""
          }
          to={"/mycart"}
        >
          My Cart
        </NavLink>
      </li>
      <button onClick={changeMode}
        className="bg-white text-2xl rounded-full px-2"
      >
       {mode === 'light' ?  <FaMoon /> : <LuSunMoon />}
      </button>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="md:btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {li}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            <img
              className="md:w-28 rounded-lg h-8 md:h-12"
              src={"https://i.ibb.co/m88tMqF/24489871-6937176.jpg"}
              alt="brand logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 md:gap-8">{li}</ul>
        </div>

        <div className="navbar-end md:gap-x-5">
          {user?.displayName && user?.photoURL && (
            <div className="flex md:gap-x-5 gap-x-2  justify-center items-center cursor-move">
              <h2 className={user?.displayName ? "gap-x-2" : "hidden"}>
                {user?.displayName ? user.displayName : " "}
              </h2>
              <img
                className={user?.photoURL ? "h-10 w-10 rounded-full" : "hidden"}
                src={
                  user?.photoURL
                    ? user.photoURL
                    : "https://i.ibb.co/rQCngXW/user.png"
                }
                alt="Profile"
              />
            </div>
          )}
          <div>
            {user?.email ? (
              <Link to={"/login"}>
                <li
                  onClick={logoutUser}
                  className="btn bg-blue-400 text-white hover:bg-blue-500 cursor-progress"
                >
                  <CgLogIn className="hidden md:block" />
                  Logout
                </li>
              </Link>
            ) : (
              <Link to={"/register"}>
                <li className="btn bg-blue-400 text-white hover:bg-blue-500">
                  <CgLogIn className="hidden  md:block" />
                  Register
                </li>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
