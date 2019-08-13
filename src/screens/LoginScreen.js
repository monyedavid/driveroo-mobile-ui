import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { userLogin } from "../resources/redux-actions/auth";
import "../styles/core/utilis";

function LoginScreen(props) {
    const [numorEmail, setnumorEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [load, setLoad] = React.useState(false);

    disableSubmit = () => {
        if (numorEmail !== "" && password !== "") {
            return false;
        }

        return true;
    };

    login = ({ emailormobile, password }) => {
        props.userLogin({ emailormobile, password });
    };

    return (
        <View style={styles.container}>
            <View style={utilis.child_container}>
                <Text style={{ ...utilis.text, ...utilis.margin_bottom_lg }}>
                    Sign in
                </Text>
                <InputField
                    autoFocus={true}
                    onChangeText={text => {
                        setnumorEmail(text);
                    }}
                    placeholder='Mobile Number or Email address'
                />
                <InputField
                    onChangeText={text => {
                        setPassword(text);
                    }}
                    placeholder='Password'
                />
                <Button
                    disabled={disableSubmit()}
                    title={"Sign In"}
                    onPress={() => {
                        setLoad(true);
                        login({ emailormobile: numorEmail, password });
                    }}
                />

                <Text style={utilis.text}>Forgot password?</Text>
            </View>
        </View>
    );
}

LoginScreen.navigationOptions = {
    headers: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 55
    }
});

export default connect(
    null,
    { userLogin }
)(LoginScreen);
