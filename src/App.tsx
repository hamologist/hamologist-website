import React from 'react';
import {
  createMuiTheme,
  CssBaseline, makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import Header from "./Nav/Header";
import Footer from "./Nav/Footer";
import Intro from "./Intro";

const useStyles = makeStyles(theme => ({
    app: {
      flex: '1 0 auto',
    },
}));

function App() {
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
      <Header />
      <div className={styles.app}>
        <Intro />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
