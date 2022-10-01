import {Box, Typography, Link} from "@mui/material";
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';

export default function Footer() {
    const row = {
        display: "flex",
        flexDirection: "row",
        marginTop: "60px",
        bgcolor: "#ededed",
        marginLeft: "40px",
        marginRight: "50px"
    }
    const column = {
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        marginLeft: "60px",
        width: "20%"
    }
    const footerLink = {
        color: "black",
        marginBottom: "20px",
        fontSize: "18px",
        textDecoration: "none"
    }
    const heading = {
        fontSize: "18px",
        marginBottom: "20px",
        fontWeight: "bold",
    }

    return  <Box sx={{ bgcolor: "#ededed", marginTop:"100px"}}>
        <Box sx={row}>
          <Box sx={column}>
            <Typography sx={heading}>PRODUCT</Typography>
            <Link sx={footerLink} href="#">Aim</Link>
            <Link sx={footerLink} href="#">Vision</Link>
            <Link sx={footerLink} href="#">Testimonials</Link>
          </Box>
          <Box sx={column}>
            <Typography sx={heading}>FOR DEVELOPERS</Typography>
            <Link sx={footerLink} href="#">Writing</Link>
            <Link sx={footerLink} href="#">Internships</Link>
            <Link sx={footerLink} href="#">Coding</Link>
            <Link sx={footerLink} href="#">Teaching</Link>
          </Box>
          <Box sx={column}>
            <Typography sx={heading}>FOR BRANDS</Typography>
            <Link sx={footerLink} href="#">Writing</Link>
            <Link sx={footerLink} href="#">Internships</Link>
            <Link sx={footerLink} href="#">Coding</Link>
            <Link sx={footerLink} href="#">Teaching</Link>
          </Box>
          <Box sx={column}>
            <Typography sx={heading}>RESOURCES</Typography>
            <Link sx={footerLink} href="#">Uttar Pradesh</Link>
            <Link sx={footerLink} href="#">Ahemdabad</Link>
            <Link sx={footerLink} href="#">Indore</Link>
            <Link sx={footerLink} href="#">Mumbai</Link>
          </Box>
          <Box sx={column}>
            <Typography sx={heading}>ABOUT</Typography>
            <Link sx={footerLink} href="#">Uttar Pradesh</Link>
            <Link sx={footerLink} href="#">Ahemdabad</Link>
            <Link sx={footerLink} href="#">Indore</Link>
            <Link sx={footerLink} href="#">Mumbai</Link>
          </Box>
        </Box>
        <Box sx={{borderTop:"1px solid #5C3E2A", margin: "30px 85px 0px 85px", height:"70px", display:"flex", }}>
            <Box sx={{display:"flex",marginTop:"20px", width: "100%"}}>

            
            <Box sx={{width: '25%', display:"flex",justifyContent:"space-between"}}>
            <Link sx={footerLink} href="#">Terms</Link>
            <Link sx={footerLink} href="#">Privacy</Link>
            <Link sx={footerLink} href="#">DMCA</Link>
            </Box>
            <Box sx={{width: '50%',display:"flex",justifyContent:"center"}}>
               Molestie nunc non blandit
            </Box>
            <Box sx={{width: '25%', display:"flex",justifyContent:"space-between"}}>
                <BrightnessHighIcon/>
                <BrightnessHighIcon/>
                <BrightnessHighIcon/>
                <BrightnessHighIcon/>
                <BrightnessHighIcon/>
            </Box>
            </Box>
        </Box>
        </Box>
}