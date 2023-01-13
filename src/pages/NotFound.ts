import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const NotFound= ()=> {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/"); // -1 or -2 backward
    }, 1000);
  }, []);
  // return <Navigate to="/"/>
}
export default NotFound;
