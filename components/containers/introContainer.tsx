import React from 'react';
import Link from 'next/link';
import { Button, Container, Typography } from '@material-ui/core';
import styles from './introContainer.module.css';

export type ReadMoreContainerProps = React.PropsWithChildren<{
  header: string,
  headerHref: string,
  openInNewTab: boolean,
  dek: string,
  isNextLink: boolean,
}>;

export function IntroContainer(
  {
    header,
    headerHref,
    openInNewTab,
    dek,
    children,
    isNextLink,
  }: ReadMoreContainerProps,
) {
  let button = (
    <Button
      href={isNextLink ? null : headerHref}
      target={openInNewTab ? '_blank' : null}
      className={styles.projectButton}
    >
      <Typography variant="h4">{header}</Typography>
    </Button>
  );

  if (isNextLink) {
    button = (
      <Link href={headerHref}>
        {button}
      </Link>
    );
  }

  return (
    <Container>
      {button}
      <Typography>
        {dek}
      </Typography>
      {children}
    </Container>
  );
}
