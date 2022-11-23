import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Particles from "react-tsparticles";
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    particlesCanvas:{
        position: "absolute"
    }
});

const Home = () => {
    const classes =useStyles();
    return (
      <>
        <Navbar />
        <Main />
        { <Particles
          canvasClassName={classes.particlesCanvas}
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        /> }
      </>
    );
}

export default Home
