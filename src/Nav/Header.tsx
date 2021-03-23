import React from 'react';
import {
  AppBar, Button,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
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
          <Button component={Link} to={"/"}>
            <Typography>
              Home
            </Typography>
          </Button>
        </div>
        <Button component={Link} to={"/projects/"}>
          <Typography>
            Projects
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
