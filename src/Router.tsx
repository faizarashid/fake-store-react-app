import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useRoutes,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import userToken from "./components/userToken";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Product from "./pages/Product";
import React from "react";
const Router = () => {
  const [token, setToken] = userToken();

  return (
    <>
      <NavBar />
      <Home />
      <Routes>
        {token ? (
          <>
            {" "}
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Product />} />
          </>
        )}
      </Routes>
      <h1>Plese Login to view Links</h1>
    </>
  );
};
export default Router;
