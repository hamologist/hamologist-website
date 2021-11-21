import React from 'react';
import {
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import styles from './footer.module.css';
import FixedAppBar from './fixedAppBar';

const LocalIconButton = function LocalIconButton(
  { href, children }: React.PropsWithChildren<{ href: string }>,
) {
  return (
    <IconButton
      href={href}
      edge="end"
      target="_blank"
      color="inherit"
      aria-label="menu"
    >
      {children}
    </IconButton>
  );
};

const Footer = function Footer() {
  return (
    <FixedAppBar position="static">
      <Toolbar variant="dense">
        <Typography className={styles.title}>
          © 2021 Jordan Paris
        </Typography>
        <LocalIconButton href="https://www.linkedin.com/in/derrick-paris-7bb14aa4/">
          <LinkedInIcon />
        </LocalIconButton>
        <LocalIconButton href="https://github.com/hamologist">
          <GitHubIcon />
        </LocalIconButton>
        <LocalIconButton href="mailto:hamologist@gmail.com">
          <EmailIcon />
        </LocalIconButton>
      </Toolbar>
    </FixedAppBar>
  );
};

export default Footer;
