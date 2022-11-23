import React from 'react'
import Navbar from './Navbar'
import {Box, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    margin: "0 auto",
    padding: "1rem",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "tomato",
    color: "white",
    lineHeight: "1",
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin:"0 auto"
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "white",
    padding: "0",
    textTransform: "uppercase",
  },
}));

const Resume = () => {
    const classes = useStyles();
    return (
      <>
        <Navbar />
        <Box component="header" className={classes.mainContainer}>
          <Typography variant="h4" align="center" className={classes.heading}>
            Professional  Experience
          </Typography>

          <Box component="div" className={classes.timeLine}>
            

            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              2022
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subHeading}
              >
                {" "}
               Software Developer 
                
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ color: "tomato" }}
              >
                {" "}
                <h3>U.S. Department of Veterans Affairs.</h3>
                <h4>Washington, D.C.</h4>{" "}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                style={{ color: "tomato" }}                
              > 
</Typography>
            </Box>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              2021
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subHeading}
              >
                {" "}
                Software Developer - AWS Cloud Services
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ color: "tomato" }}
              >
                {" "}
                <h3>PNC Financial Services.</h3>
                <h4>Pittsburgh, PA</h4>{" "}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                style={{ color: "tomato" }}
              > </Typography>
            </Box>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              2020
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subHeading}
              >
                {" "}
                Software Developer - Cloud Services
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ color: "tomato" }}
              >
                {" "}
                <h3>Apricot Technologies Inc.</h3>
                <h4>Tampa, FL</h4>{" "}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                style={{ color: "tomato" }}
              > </Typography>
            </Box>
            
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              2019
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subHeading}
              >
                {" "}
                Graduate Research Assistant
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ color: "tomato" }}
              >
                {" "}
                <h3>Cleveland State University.</h3>
                <h4>Cleveland, OH</h4>
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                style={{ color: "tomato" }}
              > </Typography>
            </Box>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              2018
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subHeading}
              >
                {" "}
                Software Developer Intern
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ color: "tomato" }}
              >
                {" "}
                <h3>SmartBridge IoT Solutions.</h3>
                <h4>Hyderabad, India</h4>{" "}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                style={{ color: "tomato" }}
              >
                
              </Typography>
            </Box>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              2017
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subHeading}
              >
                {" "}
                Java Developer Intern
              </Typography>
              <Typography
               display="block"
                variant="body1"
                align="center"
                style={{ color: "tomato" }}
              >
                {" "}
                <h3>Institute of Electronics and Telecommunication Engineers.</h3>  
                <h4>Hyderabad, India</h4>
                {" "}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                style={{ color: "tomato" }}
              >
                
              </Typography>
            </Box>
            
          
          </Box>
        </Box>
      </>
    );
}

export default Resume
