import {Card, Box, Paper, Typography, Container, Button} from "@mui/material";
import Footer from '../components/footer';
import {Navigate} from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { useSelector } from "react-redux";

export default function About() {
    const bigBtn = {
        borderRadius: "40px", 
        border: "1px solid", 
        padding: "6px", 
        fontWeight:"bold",
        fontSize: "17px",
        textTransform: "none", 
        width: "130px", 
        margin: "2px",
        color: "black"
    }

    const teamCard = {
        background:'#fff',
        boxShadow:"0 7px 30px -10px rgba(150,170,180,0.5)",
        width:'310px', 
        display:'flex',
        justifyContent:'center',
        borderRadius:'10px',
        marginTop:'45px',
    }

    const iconBox = {
        width:"200px",
        position:"absolute", 
        display:"flex",
        marginTop:"21.5%",
        justifyContent:"space-between"
    }
    const iconCard = {
        width:"35px", 
        height:"35px", 
        justifyContent:"center", 
        alignItems:"center",
        display:"flex"
    }
    const listImg = { 
        flex: "1 1 30%", /*grow | shrink | basis */
        height: "420px",
        justifyContent: "center",
        display: "flex"
    }
    const contentWrapper  = {
        display:'flex',
        flexDirection:'row', 
        padding:"0px 60px 0px 60px", 
        marginTop:'60px'
    }

    const bullet = {
        fontSize:"30px",
        width:"12%", 
        fontWeight:"bold"
    }

    const bulletBox = {
        marginBottom:"10px", 
        display:"flex", 
        flexDirection:"column", 
        marginLeft:"12px"
    }
    
    const bulletHeading = {
        marginTop:"0px", 
        fontSize:"30px",
        fontWeight:"bold"
    }
    
    const bulletDesc = {
        marginTop:"10px",
        fontSize:"20px"
    }
   
    const imgArr = Array(6).fill('https://images.unsplash.com/photo-1512911268383-f74e84ff8496?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80') 

    const {isAuthenticated} = useSelector((state) => state.user);
    
    if(isAuthenticated) {
      return <Paper sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: "column"
    }}> 
    <Container maxWidth="lg">

    <Box sx={{
              display:"flex", 
              alignItems:"center", 
              justifyContent:"center"}}>
        <Typography variant="h1" sx={{position:"absolute", fontSize:"60px", marginBottom:"370px", textAlign:"center", fontWeight:"bold"}}>We're changing the <br/>whole game.</Typography>
        <Box sx={{
             display:"flex",
             position:"absolute", 
             width:"280px", 
             justifyContent:'space-between', 
             marginBottom:"70px"}}>
            <Button sx={bigBtn}>
                      Get Started
            </Button>
            <Button sx={bigBtn}>
                      View Pricing
            </Button>
        </Box>
     <img style={{borderRadius:"20px", width:'100%',height:'600px'}} alt="pic"
     src="https://images.unsplash.com/photo-1578500467296-441a11d5d55a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
    </Box>

    <Box sx={contentWrapper}>
        <Box sx={{width:'480px'}}>
           <Typography variant="h5" sx={{fontWeight:"bold",color:'#5C3E2A'}}>OUR STORY</Typography>
           <Typography variant="h5" sx={{marginTop:"20px",fontWeight:"bold"}}>We are building the economic infrastructure for the Internet. <br/>Businesses of every size.</Typography>
           <Box sx={{display:'flex', marginTop:"60px"}}>
             <img style={{width:'90px'}} src="https://images.unsplash.com/photo-1512911268383-f74e84ff8496?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="pic one"/>
             <Typography sx={{marginLeft:"20px"}} variant="h6">Molestie nunc non blandit massa enim. Etiam erat velit scelerisque in dictum non consectetur a. </Typography>
           </Box>
        </Box>
        <Box sx={{width:'50%',marginLeft:"115px"}}>
          
              <Box sx={{display:"flex"}}>
                <Typography sx={bullet}>
                 01.
                </Typography>
                <Box sx={bulletBox}>
                <Typography sx={bulletHeading}>6 years of intense research</Typography>
                   <Typography sx={bulletDesc}>Molestie nunc non blandit massa enim. Etiam erat velit scelerisque in dictum non consectetur</Typography>
                </Box>
              </Box>

              <Box sx={{display:"flex"}}>
              <Typography sx={bullet}>
                 02.
                </Typography>
                <Box sx={bulletBox}>
                <Typography sx={bulletHeading}>Audience Segmentation</Typography>
                   <Typography sx={bulletDesc}>Molestie nunc non blandit massa enim. Etiam erat velit scelerisque in dictum non consectetur</Typography>
                </Box>
              </Box>

              <Box sx={{display:"flex"}}>
              <Typography sx={bullet}>
                 03.
                </Typography>
                <Box sx={bulletBox}>
                <Typography sx={bulletHeading}>Contact Monitoring</Typography>
                   <Typography sx={bulletDesc}>Molestie nunc non blandit massa enim. Etiam erat velit scelerisque in dictum non consectetur</Typography>
                </Box>
              </Box>
         
        </Box>
    </Box>

    <Box sx={contentWrapper}>
        <Box sx={{width:'480px'}}>
          <Typography sx={{fontWeight:"bold",fontSize:"45px"}}>Our Mission</Typography>
          <Box>
           <Typography sx={{marginTop:"30px",fontSize:"20px"}}>Molestie nunc non blandit massa enim. Etiam erat velit scelerisque in dictum non consectetur a. Aliquet sagittis id consectetur purus ut faucibus. </Typography>
          </Box>
        </Box>
        <Box sx={{width:'50%', marginLeft:"140px"}}>
          <img style={{width:'470px', borderRadius:'20px'}} src="https://images.unsplash.com/photo-1512911268383-f74e84ff8496?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="pic two"/>
        </Box>
    </Box>


    <Box sx={contentWrapper}>
        <Box sx={{width:'530px'}}>
          <img style={{width:'470px', borderRadius:'20px'}} src="https://images.unsplash.com/photo-1512911268383-f74e84ff8496?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="pic three"/>
        </Box>
        <Box sx={{width:'50%', marginLeft:"80px"}}>
          <Typography sx={{fontWeight:"bold",fontSize:"45px"}}>Our Vision</Typography>
         <Box>
           <Typography sx={{marginTop:"30px",fontSize:"20px"}}>Molestie nunc non blandit massa enim. Etiam erat velit scelerisque in dictum non consectetur a. Aliquet sagittis id consectetur purus ut faucibus. </Typography>
           <Typography sx={{marginTop:"20px",fontSize:"20px"}}>Molestie nunc non blandit massa enim. Etiam erat velit scelerisque in dictum non consectetur a. Aliquet sagittis id consectetur purus ut faucibus. </Typography>
         </Box>
        </Box>
    </Box>
   
    <Box sx={{
             display:'flex',
             alignItems:"center", 
             justifyContent:"center", 
             fontSize:"40px", 
             marginTop:"60px"}}>
           <strong>Our Leading, Strong <br/>And Creative Team</strong>
    </Box>

    <Box sx={{
              display:'flex',
              alignItems:"center", 
              justifyContent:"space-around", 
              fontSize:"40px", 
              marginTop:"15px", 
              flexWrap:'wrap'}}>
      {imgArr.map((img)=> {
          return (
              <Box sx={listImg}>
                  <Card sx={teamCard}> 
                   <img alt='team' src={img} style={{width:'270px', height:'180px', borderRadius:'10px',marginTop:'20px'}}/>
                   <Typography sx={{position:"absolute", marginTop:"15%", fontWeight:"bold", fontSize:"24px"}}>Nancy Drew</Typography>
                   <Typography sx={{position:"absolute", marginTop:"17.4%", fontSize:"21px"}}>Developer</Typography>
                   <Box sx={iconBox}>
                       <Card sx={iconCard}>
                         <FacebookOutlinedIcon/> 
                       </Card>
                       <Card sx={iconCard}>
                         <FacebookOutlinedIcon/> 
                       </Card>
                       <Card sx={iconCard}>
                         <FacebookOutlinedIcon/> 
                       </Card>
                       <Card sx={iconCard}>
                         <FacebookOutlinedIcon/> 
                       </Card>
                   </Box>
                  </Card>
                   
              </Box>
              
          )
      })}  
    </Box>

    <Box sx={{
             display:'flex',
             alignItems:"center", 
             justifyContent:"center", 
             fontSize:"40px", 
             marginTop:"50px"}}>
           <Button sx={bigBtn}>View All</Button>
    </Box>

    <Box sx={{
             display:'flex',
             alignItems:"center", 
             justifyContent:"center", 
             fontSize:"40px", 
             marginTop:"60px", 
             flexDirection:"column"}}>
           <Card sx={{
                     display:'flex',
                     alignItems:"center", 
                     justifyContent:"", 
                     fontSize:"40px", 
                     marginTop:"60px", 
                     flexDirection:"column", 
                     bgcolor:'#fafafa', 
                     boxShadow:"0 7px 30px -10px rgba(150,170,180,0.5)", 
                     width:"700px",
                     height:"250px"}}>
              <strong>Register for our Free </strong>
              <strong>7-Day Trial now!</strong>
              <Box sx={{display:"flex", width:"100%", justifyContent:"space-evenly", marginTop:"30px"}}>
                  <Typography>...No promo code required</Typography>
                  <Typography>...Fast Delivery</Typography>
              </Box>
              <Box sx={{display:"flex", width:"100%", justifyContent:"space-between", marginTop:"50px"}}>
                  <Typography>hehbejh hehbejh</Typography>
                  <Button sx={{
                          width:"150px",
                          textDecoration: "none",
                          bgcolor:"black", 
                          color:"#fff", 
                          borderRadius:"25px",
                          padding:"10px"}}>Click here</Button>
              </Box>
           </Card>
           
    </Box>

    </Container>
    
        <Footer/>
        
    </Paper>;
    } else {
      return <Navigate replace to="/" />
    }
    
}