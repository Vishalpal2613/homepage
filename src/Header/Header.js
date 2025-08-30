import React from 'react'
import { AppBar, Box, Tabs, Toolbar, Tab, Button, Link } from '@mui/material';
import ApiIcon from '@mui/icons-material/Api';


const links = ["Products", "Solutions", "Pricing", "Enterprise"];
const Header = () => {
  return (
    <AppBar sx={{ bgcolor: "transparent", boxShadow: "0" }}>
      <Toolbar>
        <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
          <ApiIcon sx={{ color: "black" }} />
          <Box>
            <Tabs component={Link} sx={{textDecoration: "none"}}>
              {links.map((link, index) => (
                <Tab sx={{fontWeight: "bold", textDecoration: "none", ":hover": {
                  textDecoration: 'underline',
                  textUnderlineOffset: "5px",
                }}} key={index} label={link} />
              ))}
            </Tabs>
          </Box>
          <Box display="flex" marginLeft={"auto"}>
            <Button sx={{ marginRight: 2 }} variant='outlined'>Talk To Us</Button>
            <Button sx={{ marginLeft: 3 }} variant='contained'>Try For Free</Button>


          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header