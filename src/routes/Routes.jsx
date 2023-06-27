import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../layout/Dashboard/Dashboard";
import Cart from "../pages/Cart/cart";
import Allusers from "../pages/Allusers/Allusers";
import AddItem from "../pages/Dash/AddItem/AddItem";
import ManageItems from "../pages/Dash/ManageItems/ManageItems";
import AdminRoute from "./AdminRoute";
import Payment from "../pages/Dash/Payment/Payment";
import UserHome from "../layout/Dashboard/UserHome/UserHome";
import AdminHome from "../layout/Dashboard/AdminHome/AdminHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    //   errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    //   errorElement: <ErrorPage />,
    children: [
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "mycart",
        element: <Cart></Cart>,
      },
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },

      // admin panel
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <Allusers></Allusers>
          </AdminRoute>
        ),
      },
      {
        path: "adminhome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "manageitems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
