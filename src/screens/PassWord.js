import * as React from "react";
import { connect } from "react-redux";
import {
    View,
    StyleSheet,
    Text,
    ActivityIndicator,
    Keyboard
} from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Snackbar } from "react-native-material-ui";
import isEmpty from "../utils/is.empty";
import { snackBarGen } from "../utils/errors/errorHandler";
import { userLogin } from "../resources/redux-actions/auth";
import "../styles/core/utilis";
import { utilis } from "../styles/core/utilis";

class PasswordScreen extends React.Component {
    state = {
        password: "",
        load: "",
        snackbar: "",
        loading: false
    };

    handleText(value, name) {
        this.setState({
            [name]: value
        });
    }

    disableSubmit = () => {
        return this.state.password === "" ? true : false;
    };

    snackbarClose = (e, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setSnackbar(false);
    };

    componentDidMount() {
        const userdata = this.props.navigation.getParam("userdata", "");
        console.log(userdata, "from password | page");
    }

    componentDidUpdate() {
        if (this.props.isAuthenticated) {
            console.log("redirect to last page :)");
        }
    }

    render() {
        const { props } = this;
        const { loading } = this.state;
        displayTheSnack$ = isEmpty(props.errors)
            ? null
            : snackBarGen(props.errors);

        return (
            <View style={styles.container}>
                {displayTheSnack$
                    ? displayTheSnack$.map(({ message, variant }, index) => (
                          <Snackbar
                              visible={true}
                              color={"red50"}
                              message={message}
                              key={index}
                              style={{
                                  width: "40%"
                              }}
                              onRequestClose={() => console.log("close")}
                          />
                      ))
                    : null}
                <View style={utilis.child_container}>
                    <Text
                        style={{ ...utilis.text, ...utilis.margin_bottom_lg }}
                    >
                        Enter Your Password
                    </Text>
                    <InputField
                        onChangeText={text => {
                            this.handleText(text, "password");
                        }}
                        placeholder='Password'
                        secureTextEntry={true}
                    />
                    {!loading ? (
                        <Button
                            disabled={this.disableSubmit()}
                            title={";)"}
                            onPress={() => {
                                const {
                                    state: { password },
                                    props: { navigation }
                                } = this;
                                const email = navigation.getParam("email", "");
                                // this.setState({ loading: true });
                                props.userLogin({
                                    emailormobile: email,
                                    password
                                });
                            }}
                        />
                    ) : (
                        <ActivityIndicator size='small' color='#002257' />
                    )}
                </View>
            </View>
        );
    }
}

PasswordScreen.navigationOptions = {
    headers: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 55
    }
});

const map_state_to_props = ({ auth, errors }) => ({
    isAuthenticated: auth.isAuthenticated,
    errors: errors
});

export default connect(
    map_state_to_props,
    { userLogin }
)(PasswordScreen);
