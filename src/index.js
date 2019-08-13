import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Routes from "./routes";
import { client } from "./apollo";
// REDUX
import { Provider } from "react-redux";
import store from "./resources/redux-store";

export default class App extends React.PureComponent {
    render() {
        return (
            <Provider store={store}>
                <ApolloProvider client={client}>
                    <MuiThemeProvider theme={materialUITheme}>
                        <Routes />
                    </MuiThemeProvider>
                </ApolloProvider>
            </Provider>
        );
    }
}
