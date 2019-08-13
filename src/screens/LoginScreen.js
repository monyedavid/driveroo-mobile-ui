import * as React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Snackbar } from "react-native-material-ui";
import isEmpty from "../utils/is.empty";
import { snackBarGen } from "../utils/errors/errorHandler";
import { userLogin, userMe } from "../resources/redux-actions/auth";
import "../styles/core/utilis";

function LoginScreen(props) {
    const [numorEmail, setnumorEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [load, setLoad] = React.useState(false);
    const [snackbar, setSnackbar] = React.useState(true);

    // console.log(props.auth);
    // if (props.auth.isAuthenticated) {
    //     props.navigation.navigate("Confirmation");
    // }

    // console.log(props.errors, "| error reducers state");
    const displayTheSnack$ = isEmpty(props.errors)
        ? null
        : snackBarGen(props.errors);

    disableSubmit = () => {
        if (numorEmail !== "" && password !== "") {
            return false;
        }
        return true;
    };

    snackbarClose = (e, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setSnackbar(false);
    };

    login = ({ emailormobile, password }) => {
        props.userLogin({ emailormobile, password });
    };

    return (
        <View style={styles.container}>
            {displayTheSnack$
                ? displayTheSnack$.map(({ message, variant }, index) => (
                      <Snackbar
                          visible={true}
                          message={message}
                          key={index}
                          onRequestClose={() => console.log("close")}
                      />
                  ))
                : null}
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
                    secureTextEntry={true}
                />
                <Button
                    disabled={disableSubmit()}
                    title={"Sign In"}
                    onPress={() => {
                        // setLoad(true);
                        login({ emailormobile: numorEmail, password });
                    }}
                />

                <Text style={utilis.text}>Forgot password?</Text>
                <Text
                    style={utilis.text}
                    onPress={() => {
                        props.navigation.navigate("Profile");
                    }}
                >
                    Register?
                </Text>
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

const map_state_to_props = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    map_state_to_props,
    { userLogin, userMe }
)(LoginScreen);
