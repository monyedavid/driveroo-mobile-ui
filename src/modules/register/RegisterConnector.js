import * as React from "react";
import { Button, Text } from "react-native-elements";

export class RegisterConnector extends React.PureComponent {
    onPress = () => {
        console.log("button Press");
    };

    render() {
        return (
            <React.Fragment>
                <Text>Hello</Text>
            </React.Fragment>
        );
    }
}
