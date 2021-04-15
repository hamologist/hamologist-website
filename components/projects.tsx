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
import EmojifyDialog from "./dialog/emojifyDialog";
import MandelbrotDialog from "./dialog/mandelbrotDialog";
import Chip8Dialog from "./dialog/chip8Dialog";
import DiceRollDialog from "./dialog/diceRollDialog";

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
  projectButton: {
    paddingLeft: 0,
    paddingRight: 0,
    textTransform: 'none',
    marginBottom: 10,
  },
  projectDivider: {
    marginTop: 20,
    marginBottom: 20,
  },
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
              <Button
                href={"https://www.hamologist.com/emojify/"}
                target={"_blank"}
                className={classes.projectButton}
              >
                <Typography variant="h4">Emojify</Typography>
              </Button>
              <Typography>
                Liven up a message with a randomized assortment of emojis.
              </Typography>
              <EmojifyDialog />
            </Container>
            <Divider className={classes.projectDivider} />
            <Container>
              <Button
                href={"https://www.hamologist.com/mandelbrot/"}
                target={"_blank"}
                className={classes.projectButton}
              >
                <Typography variant="h4">Mandelbrot</Typography>
              </Button>
              <Typography>
                Peer into the mandelbrot set and visualize the power of fractals.
              </Typography>
              <MandelbrotDialog />
            </Container>
            <Divider className={classes.projectDivider} />
            <Container>
              <Button className={classes.projectButton} href={"https://www.hamologist.com/chip-eight/"}>
                <Typography variant="h4">CHIP-8 Interpreter</Typography>
              </Button>
              <Typography>
                Interpret the ancient text and run CHIP-8 applications.
              </Typography>
              <Chip8Dialog />
            </Container>
            <Divider className={classes.projectDivider} />
            <Container>
              <Button className={classes.projectButton} href={"https://github.com/hamologist/dice-roll"}>
                <Typography variant="h4">Dice Roll</Typography>
              </Button>
              <Typography>
                It's time to let luck decide! Grab your D20 and hope for the best!
              </Typography>
              <DiceRollDialog />
            </Container>
            <Divider className={classes.projectDivider} />
            <Container>
              <Button className={classes.projectButton} href={"https://www.hamologist.com"}>
                <Typography variant="h4">hamologist.com</Typography>
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
