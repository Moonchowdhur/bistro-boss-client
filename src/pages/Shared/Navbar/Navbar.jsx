import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { Authcontext } from "../../provider/Authprovider";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart from "../../../hooks/UseCart";
import useAdmin from "../../../hooks/useAdmin";

import { BsToggle2Off, BsToggleOn } from "react-icons/bs";

const Navbar = ({ isDarkMode, onToggle }) => {
  const { user, logOut } = useContext(Authcontext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  console.log(cart);
  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="fixed w-full max-w-screen-xl z-10 bg-opacity-30 py-2 bg-black text-white">
      <div className="flex  justify-between p-2 h-20">
        <div className="flex gap-2 items-center h-14">
          <img src={logo} className="w-16 h-16" alt="" />
          <h2 className="text-3xl font-medium">
            Bistro Boss
            <br /> restaurant
          </h2>
        </div>
        <ul className="flex font-bold gap-4 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "text-yellow-400" : ""
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive, isPending }) =>
                isActive ? "text-yellow-400" : ""
              }
            >
              OUR MENU
            </NavLink>
          </li>
          <li>
            <button className="theme-toggle bg-orange-500" onClick={onToggle}>
              {isDarkMode ? (
                <BsToggle2Off className="text-3xl text-yellow-400" />
              ) : (
                <BsToggleOn className="text-3xl " />
              )}
            </button>
          </li>
          <li>
            <NavLink
              to="/order/salad"
              className={({ isActive, isPending }) =>
                isActive ? "text-yellow-400" : ""
              }
            >
              ORDER
            </NavLink>
          </li>
          {}
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "text-yellow-400" : ""
              }
            >
              OUR MENU
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "text-yellow-400" : ""
              }
            >
              OUR SHOP
            </NavLink>
          </li>

          <li>
            {isAdmin ? (
              <NavLink
                to="/dashboard/adminhome"
                className={({ isActive, isPending }) =>
                  isActive ? "text-yellow-400" : ""
                }
              >
                Dashbboard
              </NavLink>
            ) : (
              <NavLink
                to="/dashboard/userhome"
                className={({ isActive, isPending }) =>
                  isActive ? "text-yellow-400" : ""
                }
              >
                Dashbboard
              </NavLink>
            )}
          </li>
          <li>
            <NavLink
              to="/dashboard/mycart"
              className={({ isActive, isPending }) =>
                isActive ? "text-yellow-400" : ""
              }
            >
              <button className="btn p-3 relative gap-2">
                <AiOutlineShoppingCart className="text-xl" />
                <div className="badge bg-orange-600 text-lg">
                  {cart.length || 0}
                </div>
              </button>
            </NavLink>
          </li>
          <li>
            {user ? (
              <div className="flex gap-2 items-center">
                {/* <p>{user.displayName}</p> */}
                <button onClick={handleLogout} className="">
                  LOGOUT
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isActive ? "text-yellow-400" : ""
                }
              >
                LOGIN
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
