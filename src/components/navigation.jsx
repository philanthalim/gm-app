import React, { useEffect, useState } from "react";
import {
    AppBar,
    Box,
    Button,
    Container,
    Link,
    Toolbar,
} from "@mui/material";

export function Navbar() {
    
    const btn = {
      borderRadius: '40px', 
      border: '1px solid', 
      padding: '6px',
      fontSize: '15px',
      textTransform: 'none', 
      width: '110px', 
      margin: "2px",
      color: "common.black",
    }
    const [name,setName]=useState('')
    useEffect(() => {
        const getProfile = JSON.parse(localStorage.getItem("profile"));
        // JSON.parse(localStorage.removeItem("profile"))
        setName(getProfile?.user?.fname)
        console.log(getProfile,'getProfile')
      }, [name]);
    

    return <AppBar position="static" sx={{
        color: "common.white",
        bgcolor: "white"
    }}>
        <Container maxWidth="lg">
            <Toolbar disableGutters>
                
                <Box sx={{width:'25%',
                          height: "80px", 
                          color: "common.black", 
                          display: { xs: "none", md: "flex" } }}>
                    <img src="https://paperform.co/website/logo-v3/Paperform_Master_Black.png"/>
                </Box>

                <Box sx={{display:'flex',
                         width:'50%', 
                         justifyContent:'space-around',
                         color: "common.black"}}>
                    <Box>New In</Box>
                    <Box>About Us</Box>
                    <Box>Preview</Box>
                    <Box>Blog</Box>
                </Box>
               

                <Box sx={{display:'flex', 
                         width:'25%', 
                         justifyContent:'flex-end'}}>
                  <Box sx={{ alignItems:'center', 
                             marginRight:'25px',
                             display: { xs: "none", md: "flex" }}}>
                      {name? <div>name</div> : <Link href='/login' sx={{ color: "common.black", textDecoration: "none" }}>
                      Login
                    </Link> }
                  </Box>
                  <Button sx={btn}>Register</Button>
                </Box>
              
            </Toolbar>
        </Container>
    </AppBar>;
}

