import React from 'react';
import Link from 'next/link';
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
          <Link href={"/"} passHref>
            <Button>
              <Typography>
                Home
              </Typography>
            </Button>
          </Link>
        </div>
        <Link href={"/projects/"} passHref>
          <Button>
            <Typography>
              Projects
            </Typography>
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
