import React from 'react';
import { Container, Typography } from '@material-ui/core';
import BasePage from '../components/basePage';

export default function Custom404() {
  return (
    <BasePage>
      <Container className="centerText">
        <Typography variant="h1">404</Typography>
        <Typography variant="h3">Page Fizzled</Typography>
      </Container>
    </BasePage>
  );
}
