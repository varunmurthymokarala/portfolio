import React from 'react'
import {Box, Typography, Avatar, Grid } from '@material-ui/core'
import avatar from '../pp.jpg'
import Typed from 'react-typed'
import {makeStyles} from '@material-ui/core/styles'

//CSS styles
const useStyles = makeStyles(theme => ({
  avatar: {
    height: theme.spacing(40),
    width: theme.spacing(40),
    //margin: theme.spacing(10)
  },
  title: {
    color: "black",
  },
  subTitle: {
    color: "black",
  },
  center: {
    margin: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    width:"100vw",
    zIndex: 1
}
}));
const Main = () => {
    const classes = useStyles()
    return (
      <Box component="div" className={classes.center}>
        <Grid container justify="center">
          <Avatar className={classes.avatar} src={avatar} alt="" />
        </Grid>
        <Typography variant="h4" className={classes.title}>
          Varun Murthy Mokarala
        </Typography>
        <Typography variant="h5" className={classes.subTitle}>
            Software Developer
        </Typography>
        <Typography variant="h5" className={classes.subTitle}>
          <Typed
            strings={["Hey, I'm Varun. I love to solve real problems with awesome people. I specialize in Cloud and Application development that just work across all platforms and browsers. My Professional life has been 100% driven by my passion for designing and developing applications."]}
            typeSpeed={40}
           /* backSpeed={70}
            loop*/
          ></Typed>
        </Typography>
        
      </Box>
    );
}

export default Main
