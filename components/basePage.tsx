import React from 'react';
import {
  createMuiTheme,
  CssBaseline, makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import Header from "./nav/header";
import Footer from "./nav/footer";
import { DefaultComponentProps } from "@material-ui/core/OverridableComponent";
import Head from "next/head";

const useStyles = makeStyles(theme => ({
  app: {
    flex: '1 0 auto',
  },
}));

function BasePage(props: DefaultComponentProps<any>) {
  const theme = React.useMemo(
    () =>
      createMuiTheme({
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
        <title>Hamologist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.app}>
        {props.children}
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default BasePage;
