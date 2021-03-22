import React from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import styles from './Footer.module.css'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";


function Footer() {
  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar variant={"dense"}>
          <Typography className={styles.title}>
            © 2021 Jordan Paris
          </Typography>
          <IconButton href={'https://www.linkedin.com/in/derrick-paris-7bb14aa4/'} edge="end" color="inherit" aria-label="menu">
            <LinkedInIcon />
          </IconButton>
          <IconButton href={'https://github.com/hamologist'} edge="end" color="inherit" aria-label="menu">
            <GitHubIcon />
          </IconButton>
          <IconButton href={'mailto:hamologist@gmail.com'} edge="end" color="inherit" aria-label="menu">
            <EmailIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Footer;
