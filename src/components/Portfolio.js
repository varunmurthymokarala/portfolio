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
import project1 from '../images/html-css-javascript.jpg'
import project2 from '../images/react.png'
import project3 from '../images/javascript-fullstack.jpg'
import project4 from '../images/react-redux.jpg'

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
                    project 1
                  </Typography>
                  <Typography
                    component="p"
                    variant="body2"
                    color="textSecondary"
                  >
                    React Material Ui in this Part #3 video we'll build a Resume
                    component. This is a good example how to implement two
                    technologies (React & Material UI).
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  {" "}
                  Share
                </Button>
                <Button size="small" color="primary">
                  {" "}
                  Live Demo
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
                    project 2
                  </Typography>
                  <Typography
                    component="p"
                    variant="body2"
                    color="textSecondary"
                  >
                    React Material Ui in this Part #3 video we'll build a Resume
                    component. This is a good example how to implement two
                    technologies (React & Material UI).
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  {" "}
                  Share
                </Button>
                <Button size="small" color="primary">
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
                    project 3
                  </Typography>
                  <Typography
                    component="p"
                    variant="body2"
                    color="textSecondary"
                  >
                    React Material Ui in this Part #3 video we'll build a Resume
                    component. This is a good example how to implement two
                    technologies (React & Material UI).
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  {" "}
                  Share
                </Button>
                <Button size="small" color="primary">
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
                    project 4
                  </Typography>
                  <Typography
                    component="p"
                    variant="body2"
                    color="textSecondary"
                  >
                    React Material Ui in this Part #3 video we'll build a Resume
                    component. This is a good example how to implement two
                    technologies (React & Material UI).
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  {" "}
                  Share
                </Button>
                <Button size="small" color="primary">
                  {" "}
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
}

export default Portfolio
