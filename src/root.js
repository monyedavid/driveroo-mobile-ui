import * as React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import lightTheme from "./themes/lightTheme";
import Routes from "./routes";
import { getLocation } from "./services/get.location";

// geolocation tracking??
getLocation();
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
