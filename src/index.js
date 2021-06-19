import React from "react";
import ReactDOM from "react-dom";

/*Theme material Ui*/
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./utils/theme";

/*Components*/
import App from "./components/App";

ReactDOM.render(
        <ThemeProvider theme={theme}>
                <App />
        </ThemeProvider>,
        document.getElementById("app")
);
