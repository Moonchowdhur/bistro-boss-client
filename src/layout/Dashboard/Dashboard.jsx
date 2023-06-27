import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineShoppingCart,
  AiFillCalendar,
  AiOutlineMenu,
  AiFillContacts,
  AiFillBook,
  AiFillWallet,
} from "react-icons/ai";
import { ImSpoonKnife } from "react-icons/im";
import { FaShoppingBag, FaUsers } from "react-icons/fa";
import useCart from "../../hooks/UseCart";
import useAdmin from "../../hooks/useAdmin";
const Dashboard = () => {
  const [cart] = useCart();
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-2"
            className="btn bg-orange-200 drawer-button lg:hidden"
          >
            Open Sidebar
          </label>
          {/* <div className="drawer-content flex flex-col items-center justify-center"> */}
          {/* page content */}

          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu  p-4 w-80 text-lg font-medium bg-yellow-500 text-base-content">
            {/* Sidebar content here  */}
            <p className="text-2xl">
              <span className="font-bold tracking-wider">Bistro Boss</span>
              <br></br>
              <span className="font-bold tracking-widest"> Restaurant</span>
            </p>
            {isAdmin ? (
              <>
                <li className="text-black  mt-5 ">
                  <NavLink
                    to=""
                    className={({ isActive, isPending }) =>
                      isActive ? "text-white" : ""
                    }
                  >
                    <AiFillHome />
                    Admin Home
                  </NavLink>
                </li>
                <li className="text-black ">
                  <NavLink
                    to="/dashboard/addItem"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-white" : ""
                    }
                  >
                    <ImSpoonKnife />
                    Add an item
                  </NavLink>
                </li>
                <li className="text-black ">
                  <NavLink
                    to="/dashboard/manageitems"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-white" : ""
                    }
                  >
                    <AiFillWallet />
                    Manage Items
                  </NavLink>
                </li>

                <li className="text-black ">
                  <NavLink
                    to="/dashboard/booking"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-white" : ""
                    }
                  >
                    <AiFillBook />
                    Manage bookings
                  </NavLink>
                </li>
                <li className="text-black ">
                  <NavLink
                    to="/dashboard/allusers"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-white" : ""
                    }
                  >
                    <FaUsers />
                    All users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="text-black  mt-5 ">
                  <NavLink
                    to="/dashboard/home"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-white" : ""
                    }
                  >
                    <AiFillHome />
                    User Home
                  </NavLink>
                </li>
                <li className="text-black ">
                  <NavLink
                    to="/dashboard/reservation"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-white" : ""
                    }
                  >
                    <AiFillCalendar />
                    Reservation
                  </NavLink>
                </li>
                <li className="text-black ">
                  <NavLink
                    to="/dashboard/history"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-white" : ""
                    }
                  >
                    <AiFillWallet />
                    Payment History
                  </NavLink>
                </li>
                <li className="text-black  ">
                  <NavLink
                    to="/dashboard/mycart"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-white" : ""
                    }
                  >
                    <AiOutlineShoppingCart />
                    My Cart
                    <button className="btn p-3 relative gap-2">
                      <AiOutlineShoppingCart className="text-xl" />
                      <div className="badge bg-orange-600 text-lg">
                        {cart.length || 0}
                      </div>
                    </button>
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li className="text-black mt-5 ">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive ? "text-white" : ""
                }
              >
                <AiFillHome className="" />
                Home
              </NavLink>
            </li>
            <li className="text-black ">
              <NavLink
                to="/dashboard/menu"
                className={({ isActive, isPending }) =>
                  isActive ? "text-white" : ""
                }
              >
                <AiOutlineMenu />
                Our Menu
              </NavLink>
            </li>
            <li className="text-black ">
              <NavLink
                to="/dashboard/order"
                className={({ isActive, isPending }) =>
                  isActive ? "text-white" : ""
                }
              >
                <FaShoppingBag />
                Order Food
              </NavLink>
            </li>
            {/* <li className="text-black  ">
              <NavLink
                to=""
                className={({ isActive, isPending }) =>
                  isActive ? "text-white" : ""
                }
              >
                <AiFillContacts />
                Contact
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
