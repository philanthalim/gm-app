import React, { useEffect, useState } from "react";
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton, 
    Link,
    Toolbar,
    Typography,
    Paper,
} from "@mui/material";

export function Navbar() {
    
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
                
                <Box sx={{ bgcolor:'', width:'25%', height: "80px", color: "common.black", display: { xs: "none", md: "flex" },  }}>
                    <img src="https://paperform.co/website/logo-v3/Paperform_Master_Black.png"/>
                </Box>

                <Box sx={{bgcolor:'',display:'flex',width:'50%', justifyContent:'space-around'}}>
                <Box sx={{ flexGrow: 0,color: "common.black", display: { xs: "flex", md: "flex", } }}>
                  New In
                </Box>
                <Box sx={{ flexGrow: 0,color: "common.black", display: { xs: "flex", md: "flex", } }}>
                  About Us
                </Box>
                <Box sx={{ flexGrow: 0,color: "common.black", display: { xs: "flex", md: "flex", } }}>
                  Preview
                </Box>
                <Box sx={{ flexGrow: 0,color: "common.black", display: { xs: "flex", md: "flex", } }}>
                  Blog
                </Box>
                </Box>
               

                <Box sx={{bgcolor:'',display:'flex', width:'25%', justifyContent:'flex-end'}}>
                  <Box sx={{ alignItems:'center', marginRight:'25px', flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                      {name? <div>name</div> : <Link href='/login' sx={{ color: "common.black", textDecoration: "none" }}>
                      Login
                    </Link> }
                    
                  </Box>
                  <Button sx={{  borderRadius: '40px', border: '1px solid', padding: '6px',
                      fontSize: '15px',textTransform: 'none', width: '110px', margin: "2px",flexGrow: 0,color: "common.black", display: { xs: "flex", md: "flex", } }}>
                      Register
                   </Button>
                </Box>
              
            </Toolbar>
        </Container>
    </AppBar>;
}

