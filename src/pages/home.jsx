import {Box, Paper, Container} from "@mui/material";
import React from "react";

export default function Home() {
  
    return <Paper sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: "column",
    }}> 
         <Container maxWidth="lg">
           <Box
                sx={{
                display:"flex", 
                alignItems:"center", 
                justifyContent:"center"}}>
           </Box>
           <img alt='Home' style={{borderRadius:"20px", width:'100%',height:'600px'}}
             src="https://images.unsplash.com/photo-1590579421306-21e051044be0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
             <Box sx={{marginTop:"50px"}}></Box>
         </Container>
    </Paper>;
}