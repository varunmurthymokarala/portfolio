import React,{useState} from 'react'

import {
    AppBar,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Avatar,
    Divider,
    Typography,
    Box,
    ListItemIcon
} from '@material-ui/core';
import {
    Home,
    Apps,
    ContactMail,
    AssignmentInd,
} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import pic from "./../pp.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import {Link} from "react-router-dom";
import Footer from "./Footer";

const useStyles = makeStyles(theme=>({
  slidingNavContainer: {
    width: 250,
    background: "black",
    height: '100%'
  },
  avatar: {
    display: 'block',
    margin:'0.5rem auto',
    height: theme.spacing(13),
    width: theme.spacing(13)
  },
  listItem:{
      color:'tan'
  }
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/portfolio",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Experience",
    listPath: "/experience",
  },
  {
    listIcon: <Apps />,
    listText: " Academic Projects",
    listPath: "/projects",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact Me",
    listPath: "/contact-me",
  },
];

const Navbar = () => {
    const classes = useStyles();
    const sideNav = () => (
      <Box className={classes.slidingNavContainer} component="div">
        <Avatar className={classes.avatar} src={pic} alt="" />
        <Divider />
        <List onClick={()=>toggler(false)}>
          {menuItems.map((listitem, key) => (
            <ListItem button key={key} component={Link} to={listitem.listPath}>
              <ListItemIcon className={classes.listItem}>
                {listitem.listIcon}
              </ListItemIcon>
              <ListItemText
                className={classes.listItem}
                primary={listitem.listText}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    );
    const [state, setState] = useState(false);

    const toggler = (show)=> {
        setState(show);
    } 
    return (
      <>
        <Box component="nav">
          <AppBar position="static" style={{ background: "#222" }}>
            <Toolbar>
              <IconButton onClick={() => toggler(true)}>
                <MenuIcon style={{ color: "tomato" }} /> 
                <Typography variant="h4" style={{ color: "tan" }}>
                  Portfolio
                </Typography>
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
        <Drawer open={state} anchor="right" onClose={() => toggler(false)}>
          {sideNav()}
          <Footer />
        </Drawer>
      </>
    );
}

export default Navbar
