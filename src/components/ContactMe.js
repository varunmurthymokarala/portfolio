import React from 'react'
import Navbar from './Navbar'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Box, Grid} from '@material-ui/core'


const useStyles = makeStyles(theme =>({
    mainContainer:{
        background: '#233',
        height: '100vh'
    },
    heading:{
        color: 'tomato',
        textAlign: 'center',
        textTransform: 'uppercase'

    },
    form:{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute'
    },
    subHeading:{
      color:'tan',
      textAlign:'center'
    }
}));
 
const ContactMe = () => {
    const classes = useStyles();
    return (
      <Box component="div" className={classes.mainContainer}>
        <Navbar />
        <Grid container justify="center">
          <Box className={classes.form}>
            <Typography variant="h5" className={classes.heading}>
              Contact
            </Typography>
            <br />
            <Typography variant="h5" className={classes.subHeading}>
              Email: mokaralavarun@gmail.com
            </Typography>
            <br />
          </Box>
        </Grid>
      </Box>
    );
}

export default ContactMe
