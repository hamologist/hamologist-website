import React from 'react';
import {
  createTheme,
  CssBaseline, makeStyles,
  ThemeProvider,
} from '@material-ui/core';
import Head from 'next/head';
import Header from './nav/header';
import Footer from './nav/footer';

const useStyles = makeStyles(() => ({
  app: {
    flex: '1 0 auto',
  },
}));

export default function BasePage(
  {
    children,
    title,
    description,
  }: React.PropsWithChildren<{ title: string, description: string }>,
) {
  const theme = React.useMemo(
    () => createTheme({
      palette: {
        primary: {
          light: '#718792',
          main: '#455a64',
          dark: '#1c313a',
          contrastText: '#ffffff',
        },
        secondary: {
          light: '#4f5b62',
          main: '#263238',
          dark: '#000a12',
          contrastText: '#ffffff',
        },
        type: 'dark',
      },
    }),
    [],
  );
  const styles = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.app}>
        {children}
      </div>
      <Footer />
    </ThemeProvider>
  );
}
