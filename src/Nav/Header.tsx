import React from 'react';
import {
  AppBar, Button,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  menu: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar variant={"dense"}>
        <div className={classes.title}>
          <Button href="#">
            <Typography>
              Home
            </Typography>
          </Button>
        </div>
        <Button href={"#"}>
          <Typography>
            Projects
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
