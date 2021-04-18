import React from 'react';
import Link from 'next/link';
import {
  AppBar, Button,
  Toolbar,
  Typography,
} from '@material-ui/core';
import styles from './header.module.css';

export default function Header() {
  return (
    <AppBar position="static">
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
    </AppBar>
  );
}
