import React from 'react';
import Link from 'next/link';
import {
  Button,
  Toolbar,
  Typography,
} from '@material-ui/core';
import styles from './header.module.css';
import FixedAppBar from './fixedAppBar';

const Header = function Header() {
  return (
    <FixedAppBar position="static">
      <Toolbar variant="dense">
        <div className={styles.title}>
          <Link href="/" passHref>
            <Button>
              <Typography>
                Home
              </Typography>
            </Button>
          </Link>
        </div>
        <Link href="/projects" passHref>
          <Button>
            <Typography>
              Projects
            </Typography>
          </Button>
        </Link>
      </Toolbar>
    </FixedAppBar>
  );
};

export default Header;
