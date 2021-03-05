import "react-perfect-scrollbar/dist/css/styles.css";
import { ThemeProvider } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import GlobalStyles from "./components/GlobalStyles";
import theme from "./theme";
import { Routes } from "./Routes";

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
