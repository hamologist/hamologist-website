import React from 'react';
import { Container, Typography } from '@material-ui/core';
import BasePage from '../components/basePage';

const Custom404 = function Custom404() {
  return (
    <BasePage
      title="Hamologist - 404"
      description="404 page, invalid route"
    >
      <Container className="centerText">
        <Typography variant="h1">404</Typography>
        <Typography variant="h3">Page Fizzled</Typography>
      </Container>
    </BasePage>
  );
};

export default Custom404;
