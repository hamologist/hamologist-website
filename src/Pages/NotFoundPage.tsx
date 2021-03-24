import React from 'react';
import BasePage from "./BasePage";
import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  errorContainer: {
    textAlign: 'center',
  },
}))

function NotFoundPage() {
  const classes = useStyles();

  return (
    <BasePage>
      <Container className={classes.errorContainer}>
        <Typography variant={"h1"}>404</Typography>
        <Typography variant={"h3"}>Page Fizzled</Typography>
      </Container>
    </BasePage>
  );
}

export default NotFoundPage;
