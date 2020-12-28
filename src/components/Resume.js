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
            Professional Experience
          </Typography>
          <Box component="div" className={classes.timeLine}>
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
                Software Engineer 
                
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ color: "tomato" }}
              >
                {" "}
                Apricot Technologies.{" "}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                style={{ color: "tomato" }}

                                
              >
                Assisted Professor with lesson preparation, document student progress and supervising the students. 
                Maintained atmosphere of academic learning and advancement to facilitate learning 
                and development of critical thinking skills. 
                
                
              </Typography>
          <Box component="div" className={classes.timeLine}>
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
                Graduate Assistant 
                
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ color: "tomato" }}
              >
                {" "}
                CLEVELAND STATE UNIVERSITY.{" "}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                style={{ color: "tomato" }}

                                
              >
                Assisted Professor with lesson preparation, document student progress and supervising the students. 
                Maintained atmosphere of academic learning and advancement to facilitate learning 
                and development of critical thinking skills. 
                
                
              </Typography>
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
                JAVA DEVELOPER
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ color: "tomato" }}
              >
                {" "}
                SMART BRIDGE IOT SOLUTIONS.{" "}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                style={{ color: "tomato" }}
              >
                I worked on developing a web application using Spring Boot for implementing a RESTful backend
                and Angular for creating a JavaScript-based frontend.
                • Server-side validation was performed using Spring MVC Framework. 
                Used postman to test developed APIs and HTTP methods for client-server communication. 
                Hibernate, JPA are used to interact with the database.
                • Front-end development using AngularJS, HTML, CSS and MySQL database for backend.
                
                
                
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
                Junior Java developer
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ color: "tomato" }}
              >
                {" "}
                INSTITUTION OF ELECTRONICS AND TELECOMMUNICATION ENGINEERS.{" "}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                style={{ color: "tomato" }}
              >
                • Involved in SDLC Requirements Analysis, design, development, and testing of web applications 
                using an agile methodology. 
                Reviewed existing codes on company websites and corrected malfunctioning, outdated 
                sections of code. Performed testing on web applications using Selenium webDriver.
                
                
                 


                
                
                
              {/*</Typography>
            </Box>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              2013
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subHeading}
              >
                {" "}
                Web Developer
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ color: "tomato" }}
              >
                {" "}
                company name where worked{" "}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                style={{ color: "tomato" }}
              >
                React Material Ui in this Part #2(b) video we'll build a Resume
                component. This is a good example of how to implement two
                technologies (React & Material UI).
              </Typography>
            </Box>
            <Typography
              variant="h2"
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              2013
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
              <Typography
                variant="h5"
                align="center"
                className={classes.subHeading}
              >
                {" "}
                Web Developer
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ color: "tomato" }}
              >
                {" "}
                company name where worked{" "}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                style={{ color: "tomato" }}
              >
                React Material Ui in this Part #2(b) video we'll build a Resume
                component. This is a good example of how to implement two
              technologies (React & Material UI).*/}
              </Typography>
            </Box>
          </Box>
        </Box>
      </>
    );
}

export default Resume
