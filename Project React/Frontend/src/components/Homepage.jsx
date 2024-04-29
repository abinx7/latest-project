import { AppBar, Toolbar, Menu, MenuItem, Box } from '@mui/material'
import React, { useState } from 'react';
import { Link,} from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Banner from "../images/banner.jpg";
import Footer from './Layout/Footer';
import logo from "../images/logo.png";
const Homepage = () => {

 
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{backgroundColor:'black'}}>

      <AppBar style={{ backgroundColor: "black" }}>
        <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center',}}>
                    <img width={300} src={logo} alt="Logo" />
                </Box>
          <IconButton color="primary" onClick={handleMenuOpen} style={{ marginLeft: "auto", backgroundColor: '#181616' }}>
            <MenuIcon style={{ color: 'white' }} />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose} >
              <Link to={'/Home'} style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} >
              <Link to={'/Login'} style={{ textDecoration: 'none', color: 'black' }}>Login</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} >
              <Link to={'/Signup'} style={{ textDecoration: 'none', color: 'black' }}>Sign-up</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} >
              <Link to={'/Dashboard'} style={{ textDecoration: 'none', color: 'black' }}>Dashboard</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} >
              <Link to={'/Contact'} style={{ textDecoration: 'none', color: 'black' }}>Contact us</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} >
              <Link to={'/Feedback'} style={{ textDecoration: 'none', color: 'black' }}>Feedback</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} >
              <Link to={'/AboutUs'} style={{ textDecoration: 'none', color: 'black' }}>About</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} >
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <div className="home" style={{ backgroundImage: `url(${Banner})`, height:'600px', display: 'flex', justifyContent: 'flex-start', paddingRight: '800px' ,paddingTop: '100px'}}>
        <div className="headerContainer">
          <h1 >Vozzbeya Restaurant</h1>
          <b>   <p >Best Food In India</p></b>
          <Link to="/menu">
            <button>LOGIN NOW</button>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default Homepage
