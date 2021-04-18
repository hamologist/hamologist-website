import { Button, Container, Typography } from '@material-ui/core';
import React from 'react';
import styles from './introContainer.module.css';

export interface ReadMoreContainerProps {
  header: string,
  headerHref: string,
  openInNewTab: boolean,
  dek: string,
}

export function IntroContainer(
  {
    header,
    headerHref,
    openInNewTab,
    dek,
    children,
  }:
  React.PropsWithChildren<ReadMoreContainerProps>,
) {
  return (
    <Container>
      <Button
        href={headerHref}
        target={openInNewTab ? '_blank' : null}
        className={styles.projectButton}
      >
        <Typography variant="h4">{header}</Typography>
      </Button>
      <Typography>
        {dek}
      </Typography>
      {children}
    </Container>
  );
}
