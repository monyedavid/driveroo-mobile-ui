import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Snackbar } from "react-native-material-ui";
import isEmpty from "../utils/is.empty";
import { snackBarGen } from "../utils/errors/errorHandler";
import { userLogin } from "../resources/redux-actions/auth";
import "../styles/core/utilis";

function LoginScreen(props) {
    const [numorEmail, setnumorEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [load, setLoad] = React.useState(false);
    const [snackbar, setSnackbar] = React.useState(true);

    console.log(props.errors, "| error reducers state");
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
        // this.setState({ snackbar: false });
    };

    login = ({ emailormobile, password }) => {
        props.userLogin({ emailormobile, password });
    };

    return (
        <View style={styles.container}>
            {/* {displayTheSnack$
                ? displayTheSnack$.map(({ message, variant }, index) => (
                      <View>
                          <Snackbar
                              visible={true}
                              message='hello World'
                              onRequestClose={() =>
                                  this.setState({ isVisible: false })
                              }
                          />
                      </View>
                  ))
                : null} */}
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

const map_state_to_props = state => ({
    errors: state.errors
});

export default connect(
    map_state_to_props,
    { userLogin }
)(LoginScreen);
