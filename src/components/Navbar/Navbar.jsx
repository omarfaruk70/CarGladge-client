import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";


const Navbar = () => {
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
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
          <Link to={'/'} className="btn btn-ghost text-xl">
            <img className="w-28 rounded-lg h-12" src={'https://i.ibb.co/m88tMqF/24489871-6937176.jpg'} alt="brand logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 md:gap-8">{li}</ul>
        </div>
        <Link to={'/login'} className="navbar-end ">
          <li className="btn bg-blue-400 text-white hover:bg-blue-500">
          <CgLogIn />
            Login
            </li>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
