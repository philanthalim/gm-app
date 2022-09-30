import {Box, Paper, Toolbar, Typography, Container, Button, Link} from "@mui/material";
import {Outlet} from "react-router-dom";
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import Footer from '../components/footer';
import {useLocation} from 'react-router-dom';

export default function About() {
    const listImg = { 
        flex: "1 1 30%", /*grow | shrink | basis */
        height: "420px",
        justifyContent: "center",
        display: "flex"
    }
   
    //const array = ['https://images.unsplash.com/photo-1512911268383-f74e84ff8496?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80']
    const imgArr = Array(6).fill('https://images.unsplash.com/photo-1512911268383-f74e84ff8496?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80') 
    return <Paper sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: "column"
    }}> 
    <Container maxWidth="lg">
    <Box sx={{overflow:'hidden', marginTop:'0px',}}>
     <img style={{borderRadius:"20px", width:'100%',height:'600px'}}
     src="https://images.unsplash.com/photo-1578500467296-441a11d5d55a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
    </Box>

    <Box sx={{display:'flex',flexDirection:'row', paddingLeft:"60px", paddingRight:"60px",marginTop:'60px'}}>
        <Box sx={{width:'50%'}}>
          <h1>We are building the economic infrastructure for the Internet. <br/>Businesses of every size.</h1>
         <Box sx={{display:'flex'}}>
           <img style={{width:'150px'}} src="https://images.unsplash.com/photo-1512911268383-f74e84ff8496?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt=""/>
           <h4>Molestie nunc non blandit massa enim. Etiam erat velit scelerisque in dictum non consectetur a. </h4>
         </Box>

        </Box>
        <Box sx={{width:'50%'}}>
          <ul>
              <li>
                  6 years of intense research
              </li>
              <li>
                  Audience Segmentation
              </li>
              <li>
                  Contact Monitoring
              </li>
          </ul>
        </Box>
    </Box>

    <Box sx={{display:'flex',flexDirection:'row', paddingLeft:"60px", paddingRight:"60px",marginTop:'60px'}}>
        <Box sx={{width:'50%'}}>
          <h1>Our Mission</h1>
         <Box>
           <h4>Molestie nunc non blandit massa enim. Etiam erat velit scelerisque in dictum non consectetur a. Aliquet sagittis id consectetur purus ut faucibus. </h4>
         </Box>

        </Box>
        <Box sx={{width:'50%', marginLeft:"140px"}}>
        <img style={{width:'470px', borderRadius:'20px'}} src="https://images.unsplash.com/photo-1512911268383-f74e84ff8496?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt=""/>
        </Box>
    </Box>


    <Box sx={{display:'flex',flexDirection:'row', paddingLeft:"60px", paddingRight:"60px",marginTop:'60px'}}>
        <Box sx={{width:'50%', marginLeft:""}}>
        <img style={{width:'470px', borderRadius:'20px'}} src="https://images.unsplash.com/photo-1512911268383-f74e84ff8496?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt=""/>
        </Box>
        
        <Box sx={{width:'50%', marginLeft:"80px"}}>
          <h1>Our Mission</h1>
         <Box>
           <h4>Molestie nunc non blandit massa enim. Etiam erat velit scelerisque in dictum non consectetur a. Aliquet sagittis id consectetur purus ut faucibus. </h4>
         </Box>
    </Box>
    </Box>
   
    <Box sx={{display:'flex',alignItems:"center", justifyContent:"center", fontSize:"40px", marginTop:"60px"}}>
           <strong>Our Leading, Strong <br/>And Creative Team</strong>
    </Box>

    <Box sx={{display:'flex',alignItems:"center", justifyContent:"space-around", fontSize:"40px", marginTop:"15px", flexWrap:'wrap'}}>
      {imgArr.map((img)=> {
          return (
              <Box sx={listImg}>
                  <Box sx={{bgcolor:'#d3d3d3',width:'310px', display:'flex',justifyContent:'center',borderRadius:'10px',marginTop:'45px', flexDirection:''}}> 

                   <img src={img} style={{width:'280px', height:'220px', borderRadius:'10px',marginTop:'20px'}}/>
                   {/* <p>hell</p> */}
                 
                  </Box>
                   
              </Box>
              
          )
      })}  
    </Box>

    <Box sx={{display:'flex',alignItems:"center", justifyContent:"center", fontSize:"40px", marginTop:"50px"}}>
           <Button sx={{ borderRadius: '40px', border: '1px solid', padding: '6px',
                      fontSize: '17px', textTransform: 'none', width: '130px',color:"black", fontWeight:'bold'}}>View All</Button>
    </Box>

    <Box sx={{display:'flex',alignItems:"center", justifyContent:"center", fontSize:"40px", marginTop:"60px", flexDirection:"column"}}>
           <Box sx={{display:'flex',alignItems:"center", justifyContent:"", fontSize:"40px", marginTop:"60px", flexDirection:"column", bgcolor:'#fafafa', boxShadow:"0 10px 6px -6px #777", width:"700px",height:"300px"}}>
              <strong>Register for our Free </strong>
              <strong>7-Day Trial now!</strong>
           </Box>
           
    </Box>

    </Container>
    
        <Footer/>
        
    </Paper>;
}