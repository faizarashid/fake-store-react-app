import Box from "@mui/material/Box";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../redux/action/ActionTypes";

const Login = () => {
  const token = localStorage.getItem("userToken");
  const [data, setData] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      loginUserAction({
        username: email,
        password: password,
      })
    );
  };
  // type Login = {
  //   login: LoginpropTypes;
  // };
  // interface LoginpropTypes {
  //   setToken: any;
  //   token: String;
  // }
  // Login.propTypes = {
  //   setToken: propTypes.func,
  //   token: propTypes.string,
  // };

  return (
    <>
      <img src="../assets/login.jpeg" />
      <Box
        sx={{
          width: 300,
          height: 300,
          marginTop: "200px",
          marginLeft: "500px",
          justifyContent: "centre",
          backgroundColor: "primary.dark",
          padding: "20px",
          borderRadius: "15px",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <h1>Create User in Fake Shop - API:</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">UserName:</label>
          <TextField
            type=""
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
          />{" "}
          <br />
          <label htmlFor="password">Password:</label>
          <TextField
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="standard"
          />{" "}
          <br />
          <Button variant="contained" type="submit">
            Login Up
          </Button>
        </form>
        <p>API response with user unique token:</p>
        {JSON.stringify(data)}
      </Box>
    </>
  );
};
export default Login;
