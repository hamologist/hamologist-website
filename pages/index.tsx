import React from 'react';
import {
  Container,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import BasePage from '../components/basePage';
import { SplashContainer } from '../components/containers/splashContainer';
import ContactList from '../components/nav/contactList';
import MainSection from '../components/sections/mainSection';

export default function Home() {
  return (
    <BasePage>
      <div className="fillPage">
        <SplashContainer
          header="Jordan Paris"
          subHeader={[
            'Code is like magic',
            'I want to be a wizard',
          ]}
          avatar="/logo.jpeg"
        />
        <Divider />
        <Container className="fullWidth">
          <MainSection>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={9}>
                <Typography variant="h5">About me</Typography>
                <Typography>
                  Hello, I&apos;m a conjurer of software solutions and you&apos;ve found my personal
                  pocket dimension.
                  As a code conjurer I&apos;ve primarily focused on backend solutions, however, I
                  also dabble in the frontend arts from time to time.
                  You can find out more about my professional side from my LinkedIn.
                  If you are interested in seeing what I&apos;ve personally conjured up, take a look
                  at my projects page.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant="h5">Contact</Typography>
                <ContactList />
              </Grid>
            </Grid>
          </MainSection>
        </Container>
      </div>
    </BasePage>
  );
}
