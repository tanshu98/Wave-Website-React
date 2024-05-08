import React, { useState } from "react";
import { NavbarStyles } from "./NavbarStyles";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import logo from "../../assets/wave-logo.svg";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  interface IState {
    openDrawer: boolean;
  }

  const navItems = [
    "Home",
    "Services",
    "Portfolio",
    "About",
    "Team",
    "Pricing",
    "Blog",
    "Contact",
  ];

  const [openDrawer, setOpenDrawer] = useState<IState["openDrawer"]>(false);
  const handleDrawerToggle = () => {
    console.log("Its indside handleDrawerToggle Function");

    setOpenDrawer((prevState) => !prevState);
  };

  // Drawer is a JSX Component
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ pr: 14, display: "flex", textAlign:'center' }}
    >
      <Box>
        <Typography variant="h4" sx={{ m: 2 }}>
          Menu
        </Typography>
        <List>
          {navItems.map((item) => (
            <ListItem  key={item}>
              <ListItemText sx={{cursor: 'pointer'}}  primary={item} />
            </ListItem>
          ))}
        </List>
      </Box>
        <Box>
          {/* Button */}
          <Button sx={{mt:2,backgroundColor: '#fff', color: '#929faa', "&:hover": {backgroundColor:  '#fff', color: '#000'}}} ><CloseIcon /></Button>
        </Box>
    </Box>
  );

  return (
    <>
      {/* <Box sx={NavbarStyles.mainContainer}> */}
        <AppBar elevation={0} sx={NavbarStyles.mainContainer} position="sticky" component="nav">
          <Toolbar sx={NavbarStyles.toolbarContainer}>
            <Box sx={NavbarStyles.imageContainer}>
              <img src={logo} alt="Wave Logo" />
            </Box>
            <Box sx={NavbarStyles.linkContainer}>
              {/* <Link style={NavbarStyles.linkStyles} to="/">Home</Link>
              <Link style={NavbarStyles.linkStyles}  to="/services">Services</Link>
              <Link style={NavbarStyles.linkStyles}  to="/portfolio">Portfolio</Link>
              <Link style={NavbarStyles.linkStyles}  to="/about">About</Link>
              <Link style={NavbarStyles.linkStyles}  to="/team">Team</Link>
              <Link style={NavbarStyles.linkStyles}  to="/pricing">Pricing</Link>
              <Link style={NavbarStyles.linkStyles}  to="/blog">Blog</Link>
              <Link style={NavbarStyles.linkStyles}  to="/contact">Contact</Link> */}

              {navItems.map((item, index) => (
                <Link
                  style={NavbarStyles.linkStyles}
                  key={index}
                  to={"/" + item.toLowerCase()}
                >
                  {item}
                </Link>
              ))}
            </Box>
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            open={openDrawer}
            onClose={handleDrawerToggle}
            anchor="right"
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {drawer}
          </Drawer>
        </nav>
      {/* </Box> */}
    </>
  );
}

export default Navbar;
