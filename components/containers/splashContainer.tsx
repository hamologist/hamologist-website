import { Avatar, Container, Typography } from '@material-ui/core';
import React from 'react';
import { styled } from '@material-ui/core/styles';
import styles from './splashContainer.module.css';

export interface SplashProps {
  header: string,
  subHeader?: string[],
  avatar?: {
    src: string,
    alt?: string,
  },
}

export const LightSplash = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
}));

export function SplashContainer({ header, subHeader, avatar }: SplashProps) {
  let avatarComponent = null;
  let subHeaderComponent = null;

  if (avatar !== undefined) {
    avatarComponent = <Avatar src={avatar.src} alt={avatar.alt ?? ''} className={styles.avatar} />;
  }

  if (subHeader !== undefined) {
    subHeaderComponent = subHeader.map(
      (val) => <Typography key={val} variant="h5">{val}</Typography>,
    );
  }

  return (
    <LightSplash className={`fullWidth ${styles.splash}`}>
      {avatarComponent}
      <Typography variant="h2">{header}</Typography>
      {subHeaderComponent}
    </LightSplash>
  );
}
