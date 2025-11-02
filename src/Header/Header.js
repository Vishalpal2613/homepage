import React from 'react'
import { AppBar, Box, Tabs, Toolbar, Tab, Button, Link, Typography } from '@mui/material';
import ApiIcon from '@mui/icons-material/Api';


const links = ["Products", "Solutions", "Pricing", "Enterprise"];
const Header = () => {
  return (
    <AppBar sx={{ bgcolor: "transparent", boxShadow: "0" }}>
      <Toolbar>
        <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
          <ApiIcon sx={{ color: "black" }} />
          <Box>
            <Tabs component={Link} sx={{ textDecoration: "none" }}>
              {links.map((link, index) => (
                <Tab sx={{
                  fontWeight: "bold", textDecoration: "none", ":hover": {
                    textDecoration: 'underline',
                    textUnderlineOffset: "5px",
                  }
                }} key={index} label={link} />
              ))}
            </Tabs>
          </Box>
          <Box display="flex" marginLeft={"auto"}>
            <Button sx={{ marginRight: 2 }} variant='outlined'>Talk To Us</Button>
            <Button sx={{ marginLeft: 3 }} variant='contained'>Try For Free</Button>
          </Box>
        </Box>
      </Toolbar>
      <Box width="100%" height="100vh">
        <video width="100%" height="75%" autoPlay loop muted playsInline src='/video.mp4'></video>
        <Box display={"flex"} width="100%">
          <Typography margin='auto' variant='h4' color='black' textAlign={"center"}>Build Your Softwares Hassla Free And With Top Notch Quality</Typography>
        </Box>
        <Box width="100%" display='flex' justifyContent={"center"} margin={"auto"} marginTop={5}>
          <Button variant='outlined' sx={{ marginRight: 3 }}>Signup With Email</Button>
          <Button variant='contained' sx={{ marginLeft: 3 }}>Signup With Google</Button>
        </Box>
      </Box>
    </AppBar>
  )
}

export default Header