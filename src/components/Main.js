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
          <Typed
            strings={["Full Stack Java Developer"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          ></Typed>
        </Typography>
      </Box>
    );
}

export default Main
