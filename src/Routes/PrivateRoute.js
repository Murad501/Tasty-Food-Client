import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { loadingProvider } from "../Context/LoadingContext";
import { authContext } from "../Context/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const { setIsLoading } = useContext(loadingProvider);
  const location = useLocation();

  if (loading) {
    return setIsLoading(true);
  }

  if (user) {
    setIsLoading(false);
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
