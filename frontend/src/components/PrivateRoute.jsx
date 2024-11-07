/* eslint-disable react/prop-types */
import {  Navigate } from "react-router-dom";

export default function PrivateRoute({ children, isAuthentic }) {
  

  if (!isAuthentic) {
    return <Navigate to="/" />;
  }
  return children;
}
