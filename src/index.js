import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { client } from "./apollo";
import Root from "./root";
// REDUX
import { Provider } from "react-redux";
import store from "./resources/redux-store";

export default class App extends React.PureComponent {
    render() {
        return (
            <Provider store={store}>
                <ApolloProvider client={client}>
                    <Root />
                </ApolloProvider>
            </Provider>
        );
    }
}
