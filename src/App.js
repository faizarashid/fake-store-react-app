import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import B from "./components/B";
import A from "./components/A";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Button from "@mui/material/Button";
import Product from "./components/Product";
import NotFound from "./components/NotFound";
import ProductSlider from "./components/ProductSlider";
import {
  NavLink,
  Route,
  Router,
  Routes,
  useLocation,
  useRoutes,
} from "react-router-dom";

function App() {
  return (
    //   <Box
    //   component="form"
    //   sx={{
    //     '& > :not(style)': { m: 1, width: '25ch' },
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/products" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ProductSlider />
      {/* <Login />
      <Product /> */}
    </>
    // </Box>
  );
}

export default App;
