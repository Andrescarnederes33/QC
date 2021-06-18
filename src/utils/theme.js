import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#EB0028",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#FFA500",
      contrastText: "#FFF",
    },
  },
});

export default theme;