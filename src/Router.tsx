import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import userToken from "./components/userToken";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";

import React from "react";
const Router = () => {
  const [token, setToken] = userToken();

  return (
    <>
      <NavBar />
      <h1>Plese Login if you havent</h1>
      <Routes>
        {token ? (
          <>
            {" "}
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/product" element={<ProductDetails />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
          </>
        )}
      </Routes>
    </>
  );
};
export default Router;
