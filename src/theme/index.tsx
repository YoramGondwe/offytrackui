import { createMuiTheme, colors } from "@material-ui/core";
import shadows from "./shadows";
import typography from "./typography";

const theme = createMuiTheme({
  palette: {
    background: {
      // ...dark: "",
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      main: "#3A75DE",
    },
    secondary: {
      main: colors.blueGrey[800],
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
  ...shadows,
  typography,
});

export default theme;
