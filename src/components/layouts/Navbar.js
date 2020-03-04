import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../App";

export const Navbar = () => {
  let history = useHistory();
  const { state, dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/auth");
  };
  return (
    <nav className="flex justify-between items-center flex-wrap p-4 px-12 bg-orange-500">
      <div>
        <div className="flex items-center text-white flex-shrink-0">
          <Link
            to="/"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-orange-500 hover:bg-white mt-4 lg:mt-0"
          >
            AMF Parser
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-orange-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto  ml-auto">
        <div className="text-sm justify-end flex mr-8 lg:flex-grow">
          {state.isLoggedIn ? (
            <>
              <div className="mt-1">
                <Link
                  to="/parse"
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
                >
                  Parse
                </Link>
                <Link
                  to="/dashboard"
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
                >
                  Dashboard
                </Link>
                <span className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                  <i className="fas fa-user text-white"></i> LoggedIn as{" "}
                  {state.user.firstName}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="focus:outline-none border py-1 rounded-md px-4 border-white block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
              >
                Logout <i className="fas fa-sign-out-alt text-white"></i>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/auth"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
              >
                Login
              </Link>
              <Link
                to="/newauth"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
