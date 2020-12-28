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
                Apricot Technologies LLC.{" "}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                style={{ color: "tomato" }}

                                
              >
                     
                
                Responsibilities:
                •  Involved in Software Development Life Cycle (SDLC), Analysis, Design, Development, and Testing of 
                   application developed using an AGILE methodology.  
                •  Developed Client-side application using Angular8, Typescript, Bootstrap, JavaScript, HTML5, CSS3. 
                •  Worked on Angular 8 features such as differential loading and creating web workers with CLI for     
                   optimal application performance. Involved in development of navigation bar, multiple reusable components, modules for responsive Single Page Application (SPA). 
                •  Used Java8 for development of the server-side functionality. Used Java 8 features such as Stream API’ 
                   to achieve parallel execution while working on collections and Lambda expressions to implement 
                   functional interfaces.
                •  Used Spring Boot for building application with Spring initializers and developed REST-based 
                   Microservices. Used various Spring modules such as Spring core, beans, Spring IOC (Inversion of 
                   Control), Spring AOP (Aspect-Oriented programming) to implement middle tier.
                •  Used Spring Data JPA as persistence layer to interact with the database. Used Postman and the 
                   generated swagger to test the developed REST API’s for CRUD operations. Using MySQL as the 
                   backend database. 
                •  Implemented test cases on server side in Junit and Mockito framework. Tested Angular 8 component 
                   with Jasmine and Karma testing frameworks.
                •  Using GIT as version control and Maintaining JIRA to create epics, stories, and subtasks.
                •  Using Jenkins for continuous integration and deployment of both server-side and client-side 
                   application using Docker to AWS environment.
                •  Working with Docker contained Spring Boot microservices into AWS EC2 container service using 
                   AWS Admin console. Creating Docker images/Container and integrating with spring boot.
                •  Creating AWS S3 buckets, performing folder management in each bucket.

                ENVIRONMENT: JAVA 8, HTML5, CSS3, JAVASCRIPT, ANGULAR 8, NODE JS, SPRING BOOT, MVC, SPRING DATA JPA, 
                MICROSERVICES, RESTFUL WEB SERVICES, POSTMAN, MySQL, AMAZON S3, AMAZON EC2, MAVEN, JUNIT, SELENIUM, 
                JIRA, GIT, JENKINS, APACHE KAFKA, VISUAL STUDIO.

                
                
              </Typography>
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
                Web Application Developer
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ color: "tomato" }}
              >
                {" "}
                Cleveland State University.{" "}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                style={{ color: "tomato" }}
              >
                I worked on developing a web application using Spring Boot for implementing a RESTful backend
                and Angular for creating a JavaScript-based frontend.
                Responsibilities: 
                •	Involved in developing a Single Page Application (SPA) using React Framework.
                •	Designed and developed User Interface, Single Page Application (SPA) Components using HTML5, CSS3, React, Node.js, Bootstrap, JavaScript. Developed many reusable components.
                •	Developed RESTful web services with spring MVC and HTTP request methods (POST, GET, PUT, DELETE) to make calls among them. Developed DAO layer to perform CRUD operations in the database tables and Used Row Mapper to map a row to create POJO objects.
                •	Developed the persistence layer using Object-Relational Mapping (ORM) tools – Spring Data, JDBC.
                •	Used Spring Data JDBC to interact with MySQL Database and used Spring Data to connect with NoSQL Database - MongoDB.
                •	Experience in NoSQL, MongoDB to store the data in the backend. It helps the organization to perform Data Analysis and analyze the trend.
                •	Implemented test cases on server side in Junit and Mockito framework and tested React components with Jest and Enzyme.
                •	Configured AWS identity and Access Management groups and users for improved Login authentication. Involved in deploying static website application content into S3 buckets.
                ENVIRONMENT: JAVA 8, HTML5, CSS3, JAVASCRIPT, REACT, NODE JS, SPRING MVC, HIBERNATE, JPA, MICROSERVICES, RESTFUL WEB SERVICES, POSTMAN, MySQL, NoSQL, MONGODB, MAVEN, JUNIT, SELENIUM, JIRA, GIT, GITHUB, LOG4J,JENKINS, VISUAL STUDIO, UNIX/LINUX.                    
                               
                
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
                Application Developer
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ color: "tomato" }}
              >
                {" "}
                SmartBridge IoT Solutions.{" "}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                style={{ color: "tomato" }}
              >
                • Involved in SDLC Requirements Analysis, design, development, and testing of web applications 
                using an agile methodology. 
                Responsibilities:
                •	Designed single page application (SPA) using Angular 2/4 using MVC architecture.
                •	Involved in development of the presentation layer using Angular 2/4, HTML5, CSS3, JavaScript, AJAX.
                •	Extensively used MVC, Factory, Delegate and Singleton Design Pattern. Implemented Server-side development of the application using Spring MVC architecture.
                •	Extensively used various modules in Spring AOP, DI(IOC), Bean Auto wiring, Spring Inheritance, Spring JDBC templates and Spring Quartz schedulers for jobs.
                •	Implemented the ORM layer using Hibernate JPA for CRUD operations and Performed Mapping like One to One, One to Many and Many to Many based-on requirements using Hibernate.
                •	Used MS-SQL (MySQL, Server Services) as the backend database.
                Environment:  Java 1.7, JavaScript, JSON, Spring 3.0.7, Web Services- REST, SOAP, WSDL, XSD, CXF 2.0.5, Hibernate 3.5.6, Maven, Git, Jenkins, JUnit 4, Mockito, Oracle 11g, SonarQube, SOAPUI 4.5.

                Reviewed existing codes on company websites and corrected malfunctioning, outdated 
                sections of code. Performed testing on web applications using Selenium webDriver.
                
                              

                
                
                
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
                Java Developer
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ color: "tomato" }}
              >
                {" "}
                Institute of Electronics and Telecommunication Engineers{" "}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                style={{ color: "tomato" }}
              >
                Responsibilities:
                •	Developed UML use-case, class, object, sequence, collaboration, and activity diagrams using Rational Rose. Used Struts framework to add a module that would capture progress notes.
                •	Implemented Exception mechanism and used Struts error message mechanism. Server-side validation was performed using Struts Validation Framework.
                •	Developed JSP pages using Custom tags and Tiles framework and Struts framework.
                •	Developed and implemented intranet website using JSPs, Servlets, HTML and JavaScript to provide information about the application. 
                Environment: Java, Struts, JDBC, JNDI, MS SQL Server, WebLogic, Apache Tomcat, JSP, HTML, CSS, JavaScript, SOAP, JUnit, Apache Ant.

              </Typography>
            </Box>
            
          
          </Box>
        </Box>
      </>
    );
}

export default Resume
