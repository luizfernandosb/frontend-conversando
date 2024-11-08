/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ children }) {
  const { isAuthentic } = useAuth();

  if (!isAuthentic) {
    return <Navigate to="/" />;
  }
  return children;
}
