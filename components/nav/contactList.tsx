import React from 'react';
import {
  List,
  Typography,
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ListItemLink from './listItemLink';

export default function ContactList() {
  return (
    <List>
      <ListItemLink href="https://www.linkedin.com/in/derrick-paris-7bb14aa4/">
        <LinkedInIcon />
        <Typography>&nbsp;&nbsp;LinkedIn</Typography>
      </ListItemLink>
      <ListItemLink href="https://github.com/hamologist">
        <GitHubIcon />
        <Typography>&nbsp;&nbsp;GitHub</Typography>
      </ListItemLink>
      <ListItemLink href="mailto:hamologist@gmail.com">
        <EmailIcon />
        <Typography>&nbsp;&nbsp;Email</Typography>
      </ListItemLink>
    </List>
  );
}
