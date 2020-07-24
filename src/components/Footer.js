import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const  useStyles = makeStyles({
    root:{
        '& .MuiBottomNavigationAction-root':{
            minWidth: 0,
            maxWidth: 250
        },
        '& .MuiSvgIcon-root':{
            fill: 'tan',
            '&:hover':{
                fill:'tomato',
                fontSize:'1.8rem'
            }
        }
    }

});
const Footer = () => {
    const classes= useStyles();
    return (
      <BottomNavigation width="auto" style={{ background: "#222" }}>
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<LinkedInIcon />}
        />
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<GitHubIcon />}
        />
      </BottomNavigation>
    );
}

export default Footer
