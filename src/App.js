import React, { useState } from 'react'
import axios from 'axios'
import TextField from '@mui/material/TextField';
import B from './components/B';
import A from './components/A';
import Button from '@mui/material/Button';
   
    function App() {
        const [data, setData] = useState(null)
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('')
    
        const handleSubmit = (e) =>{
            e.preventDefault()
//             res.setHeader("Access-Control-Allow-Origin", "*")
// res.setHeader("Access-Control-Allow-Credentials", "true");
// res.setHeader("Access-Control-Max-Age", "1800");
// res.setHeader("Access-Control-Allow-Headers", "content-type");
// res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
            axios({
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Headers":"content-type",
                "Access-Control-Max-Age":"1800",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, PATCH, OPTIONS"
              },
              withCredentials: true,
              credentials: 'same-origin',
                baseURL: 'http://api.fakeshop-api.com',
                url: '/users/signup',
                data:{
                    email,
                    password,
                },
              })
                .then(({ data }) => {
                    setData(data)
                    localStorage.setItem('token', data.token)
                })
                .catch(err => console.dir(err))
        }
    
        return(
        //   <Box
        //   component="form"
        //   sx={{
        //     '& > :not(style)': { m: 1, width: '25ch' },
        //   }}
        //   noValidate
        //   autoComplete="off"
        // >  
        <section>
                  <h1>Create User in "Fake Shop - API":</h1>
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="email">E-mail:</label>
                    <TextField
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      variant="standard"
                    />
                    <label htmlFor="password">Password:</label>
                    <TextField
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      variant="standard"
                    />
                    <Button variant="contained" type="submit">Sign Up</Button>
                  </form>		
                  <p>API response with user unique token:</p>
                  {JSON.stringify(data)}
                  <A name="Sample1"/>
                  <B name="Sample2"/>
          </section>
        // </Box>
        )
    }
    
    export default App ;