import * as React from "react";
import { ApolloProvider } from "react-apollo";
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
                    <Routes />
                </ApolloProvider>
            </Provider>
        );
    }
}
