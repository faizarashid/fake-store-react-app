import Box from "@mui/material/Box";
import  { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const Login = () => {
  const [data, setData] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function fetchRequest() {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRequest();
  };
  return (
    <>
      <img src="../assets/login.jpeg" />
      <Box
        sx={{
          width: 300,
          height: 300,
          marginTop: "200px",
          marginLeft: "500px",
          backgroundColor: "primary.dark",
          padding: "20px",
          borderRadius: "15px",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <h1>Create User in "Fake Shop - API":</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail:</label>
          <TextField
            type="email"
            id="email"
            name="email"
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
        {/* <A name="Sample1"/>
        <B name="Sample2"/> */}
      </Box>
    </>
  );
};
export default Login;
