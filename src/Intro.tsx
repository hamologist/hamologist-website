import React from 'react';
import {
  Avatar,
  Container,
  Divider,
  Grid,
  List, ListItem,
  ListItemIcon,
  makeStyles,
  Typography
} from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { DefaultComponentProps } from "@material-ui/core/OverridableComponent";

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
  avatar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  gutters: {
    paddingLeft: '0px',
  }
}));

function ListItemLink(props: DefaultComponentProps<any>) {
  return (
    <ListItem button component="a" disableGutters={true} target="_blank" {...props} >
      <ListItemIcon>
        {props.children}
      </ListItemIcon>
    </ListItem>
  );
}

function Intro() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <section className={classes.splash}>
        <Container className={classes.bodyContainer}>
          <Avatar src='/logo.jpeg' className={classes.avatar}/>
          <Typography variant="h2">Jordan Paris</Typography>
          <Typography variant="h5">Code is like magic</Typography>
          <Typography variant="h5">I want to be a wizard</Typography>
        </Container>
      </section>
      <Divider />
      <Container className={classes.bodyContainer}>
        <section className={classes.main}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={9}>
              <Typography variant={"h5"}>About me</Typography>
              <Typography>
                Hello, I'm a conjurer of software solutions and you've found my personal pocket dimension.
                As a code conjurer I've primarily focused on backend solutions, however, I also dabble in the frontend arts from time to time.
                You can find out more about my professional side from my LinkedIn.
                If you are interested in seeing what I've personally conjured up, take a look at my projects page.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant={"h5"}>Contact</Typography>
              <List>
                <ListItemLink href='https://www.linkedin.com/in/derrick-paris-7bb14aa4/'>
                  <LinkedInIcon />
                  <Typography>&nbsp;&nbsp;LinkedIn</Typography>
                </ListItemLink>
                <ListItemLink href='https://github.com/hamologist'>
                  <GitHubIcon />
                  <Typography>&nbsp;&nbsp;GitHub</Typography>
                </ListItemLink>
                <ListItemLink href='mailto:hamologist@gmail.com'>
                  <EmailIcon />
                  <Typography>&nbsp;&nbsp;Email</Typography>
                </ListItemLink>
              </List>
            </Grid>
          </Grid>
        </section>
      </Container>
    </div>
  );
}

export default Intro;
