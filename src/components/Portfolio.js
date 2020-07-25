import React from 'react'
import Navbar from './Navbar'
import {
  Box,
  Grid,
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  CardActionArea
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import project1 from '../images/web development.png'
import project2 from '../images/flightdelay.jpg'
import project3 from '../images/Data Mining.jpg'
import project4 from '../images/Nueral Network.png'
import project5 from '../images/game.PNG'

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer:{
    maxWidth: 345,
    margin:'5rem auto'
  },
});

const Portfolio = () => {
  const classes = useStyles();
    return (
      <Box component="div" className={classes.mainContainer}>
        <Navbar />
        <Grid container justify="center" alignItems="center">
          {/* project-1 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  alt="project-1"
                  image={project1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Web Application
                  </Typography>
                  <Typography
                    component="p"
                    variant="body2"
                    color="textSecondary"
                  >
                    Developed a full-stack web application to store user’s information. 
                    User’s will be able to create, fetch, update and delete records online.
                    Environment: Server-side: Java, SpringMVC, SpringBoot and Spring REST modules.
                    Client-side: HTML, CSS, AngularJS
                    Back-end: MySQL.
                    
                    
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
               {/* <Button size="small" color="primary">
                  {" "}
                 {} Share
    </Button> */}
                <Button size="small" color="primary"
                 href="https://github.com/varunmurthymokarala/Web-Application"
                 rel="noopener"
                 target="_blank">
                  {" "}
                  Source code
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* project-2 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  alt="project-1"
                  image={project2}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Predicting Flight Delays using Statistical Methods.
                  </Typography>
                  <Typography
                    component="p"
                    variant="body2"
                    color="textSecondary"
                  >
                    The model is to predict whether a flight you are considering booking is likely to arrive on time.
                    Tools and Libraries: Python 3.7, Pandas, Scikit-learn, Matplotlib, Random forest Classifier.
                    
                    
                    
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/*<Button size="small" color="primary">
                  {" "}
                  Share
  </Button>*/}
                <Button size="small" color="primary" 
                 href="https://www.kaggle.com/varunmurthymokarala/predicting-flight-delays"
                 rel="noopener"
                 target="_blank">
                  {" "} 
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
           {/* project-1 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  alt="project-1"
                  image={project3}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Data Mining Algorithms
                  </Typography>
                  <Typography
                    component="p"
                    variant="body2"
                    color="textSecondary"
                  >
                    Classification of attributes into qualitative and quantitative vectors, 
                    and Implemented Decision Tree, kNN, and Naive Bayes Algorithms. 
                    Programming Language: R Language.
                    
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/*<Button size="small" color="primary">
                  {" "}
                  Share
</Button> */}
                <Button size="small" color="primary"
                 href="https://www.kaggle.com/varunmurthymokarala/notebooks"
                 rel="noopener"
                 target="_blank">
                  {" "}
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          
          {/* project-1 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  alt="project-1"
                  image={project4}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Neural Network (MNIST DATA)
                  </Typography>
                  <Typography
                    component="p"
                    variant="body2"
                    color="textSecondary"
                  >
                    Used the three-layer-feed-forward network architecture (input layer,hidden layer, and output layer)
                    with multi-layer perceptron for the recognition of handwritten digits(0,1,2...9).Designed a fully 
                    connected network structure of 784 input nodes and 10 output nodes.
                    Programming Language: Python                    
                    
                    
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/*<Button size="small" color="primary">
                  {" "}
                  Share
</Button> */}
                <Button size="small" color="primary"
                 href="https://www.kaggle.com/varunmurthymokarala/mnist-data-neural-network"
                 rel="noopener"
                 target="_blank">
                  {" "}
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
           {/* project-1 */}
           <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  alt="project-1"
                  image={project5}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Game 
                  </Typography>
                  <Typography
                    component="p"
                    variant="body2"
                    color="textSecondary"
                  >
                    3D game development with c++,c#,JavaScript. 
                    Game Engine: Unity. 
                    Status: 09/2019 - In progress.
                    
                    
                    
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/*<Button size="small" color="primary">
                  {" "}
                  Share
</Button> 
                <Button size="small" color="primary">
                  {" "}
                  Live Demo
</Button>*/}
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
}

export default Portfolio
