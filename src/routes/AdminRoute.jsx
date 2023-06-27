import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../pages/provider/Authprovider";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  console.log(location);

  if (loading || isAdminLoading) {
    return (
      <div className="radial-progress text-primary" style={{ "--value": 70 }}>
        70%
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
