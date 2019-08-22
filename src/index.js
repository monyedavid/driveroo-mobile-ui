import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { PersistGate } from "redux-persist/integration/react";
import { client } from "./apollo";
import Root from "./root";
// REDUX
import { Provider } from "react-redux";
import rs from "./resources/redux-store";

export default class App extends React.PureComponent {
    render() {
        return (
            <ApolloProvider client={client}>
                <Provider store={rs.store}>
                    <PersistGate loading={null} persistor={rs.persistor}>
                        <Root />
                    </PersistGate>
                </Provider>
            </ApolloProvider>
        );
    }
}
