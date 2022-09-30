import {Box, Paper, Toolbar, Typography, Grid, FormControlLabel, 
    Button, TextField} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Login() {
    const [password, setPassword]=useState('')
    const [username, setUsername]=useState('')
    const navigate = useNavigate();

    async function loginUser(credentials) {
        return fetch('https://www.melivecode.com/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
          .then(data => data.json())
       }
    
   async function handleSubmit (event) {
        event.preventDefault();
        const response = await loginUser({
            username,
            password,
            "expiresIn": 60000
          });
          console.log(response,'rrr')
          if(response.status === 'ok'){
            navigate("/about", { state: username })
            localStorage.setItem('profile', JSON.stringify(response));
          } else {
             alert('Invalid username or password!')
          }
       
    };
  
    return <Box sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: "column",
    }}> 
         <Grid
          sx= {{marginTop:"20px"}}
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
        <form onSubmit={handleSubmit} >
            <p>Log into your account</p>
          <Grid item >
            <TextField sx={{marginBottom:'20px'}} value={username} onChange={(e)=>
                // console.log(e.target.value,'eee')
                setUsername(e.target.value)
                } required label="Username"></TextField>
          </Grid>
          <Grid item >
            <TextField sx={{marginBottom:'20px'}} value={password} onChange={(e)=>setPassword(e.target.value)} required label="Password" type={'password'}></TextField>
          </Grid>
          <Grid item >
            <Button type="submit" sx={{border: '1px solid', padding: '6px',
            fontSize: '15px',textTransform: 'none', width: '110px'}} fullWidth> Login </Button>
          </Grid>
          </form>
        </Grid>
    </Box>;
}