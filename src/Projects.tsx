import React from 'react';
import {
  Button,
  Container,
  Divider,
  List,
  makeStyles,
  Typography
} from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    maxWidth: '700px',
    paddingLeft: '25px',
    paddingRight: '25px',
    paddingTop: '45px',
    paddingBottom: '45px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  bodyContainer: {
    width: '100%',
  },
  splash: {
    backgroundColor: theme.palette.secondary.light,
    textAlign: 'center',
    paddingTop: '45px',
    paddingBottom: '45px',
  },
  projectHeader: {
    paddingBottom: 10,
  },
  projectButton: {
    paddingLeft: 0,
    paddingRight: 0,
    textTransform: 'none',
  },
  projectDivider: {
    marginTop: 20,
    marginBottom: 20,
  }
}));

function Projects() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <section className={classes.splash}>
        <Container className={classes.bodyContainer}>
          <Typography variant="h2">Projects</Typography>
          <Typography variant="h5">Applications are spells</Typography>
          <Typography variant="h5">These ones didn't fizzle</Typography>
        </Container>
      </section>
      <Divider />
      <Container className={classes.bodyContainer}>
        <section className={classes.main}>
          <List>
            <Container>
              <Button className={classes.projectButton} href={"https://www.hamologist.com/emojify/"}>
                <Typography className={classes.projectHeader} variant="h4">Emojify</Typography>
              </Button>
              <Typography>
                Liven up a message with a randomized assortment of emojis.
              </Typography>
            </Container>
            <Divider className={classes.projectDivider} />
            <Container>
              <Button className={classes.projectButton} href={"https://www.hamologist.com/mandelbrot/"}>
                <Typography className={classes.projectHeader} variant="h4">Mandelbrot</Typography>
              </Button>
              <Typography>
                Peer into the mandelbrot set and visualize the power of fractals.
              </Typography>
            </Container>
            <Divider className={classes.projectDivider} />
            <Container>
              <Button className={classes.projectButton} href={"https://www.hamologist.com/chip-eight/"}>
                <Typography className={classes.projectHeader} variant="h4">CHIP-8 Interpreter</Typography>
              </Button>
              <Typography>
                Interpret the ancient text and run CHIP-8 applications.
              </Typography>
            </Container>
            <Divider className={classes.projectDivider} />
            <Container>
              <Button className={classes.projectButton} href={"https://www.hamologist.com"}>
                <Typography className={classes.projectHeader} variant="h4">hamologist.com</Typography>
              </Button>
              <Typography>
                Yup, the site you are on right now. What? This still counts...
              </Typography>
            </Container>
          </List>
        </section>
      </Container>
    </div>
  );
}

export default Projects;
