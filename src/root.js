import * as React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import lightTheme from "./themes/lightTheme";
import darkTheme from "./themes/darkTheme";
import grayTheme from "./themes/grayTheme";
import Routes from "./routes";

class App extends React.PureComponent {
    render() {
        return (
            <MuiThemeProvider theme={lightTheme}>
                <Routes />
            </MuiThemeProvider>
        );
    }
}

export default App;
