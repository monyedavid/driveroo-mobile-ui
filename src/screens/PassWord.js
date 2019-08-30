import * as React from "react";
import { connect } from "react-redux";
import {
    View,
    ScrollView,
    StyleSheet,
    Text,
    ActivityIndicator
} from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
// import { Snackbar } from "react-native-material-ui";
import { KeyboardAvoidingView } from "react-native";
import isEmpty from "../utils/is.empty";
import { snackBarGen } from "../utils/errors/errorHandler";
import { userLogin } from "../resources/redux-actions/auth";
import { clearErrors } from "../resources/redux-actions/shared";
import "../styles/core/utilis";
import { utilis } from "../styles/core/utilis";
import { Snackbar } from "react-native-material-ui";

class PasswordScreen extends React.Component {
    state = {
        password: "",
        hidden: false,
        load: "",
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

    handleSubmit = () => {
        const { password } = this.state;
        const { userLogin, navigation } = this.props;
        const email = navigation.getParam("email", "");
        const mobile = navigation.getParam("mobile", "");
        if (email) {
            userLogin(
                { emailormobile: email, password, isEmail: true },
                navigation.navigate
            );
        }

        if (mobile) {
            userLogin({ emailormobile: mobile, password }, navigation.navigate);
        }

        this.setState({ loading: false });
    };

    render() {
        const {
            props,
            state: { loading }
        } = this;
        const userdata = props.navigation.getParam("userdata", "");

        displayTheSnack$ = isEmpty(props.errors)
            ? null
            : snackBarGen(props.errors);

        return (
            <React.Fragment>
                {displayTheSnack$ &&
                    displayTheSnack$.map(({ message, variant }, i) => (
                        <Snackbar
                            key={i}
                            visible={true}
                            timeout={500}
                            bottomNavigation={true}
                            message={message}
                            onPress={() => props.clearErrors()}
                            onRequestClose={() => {
                                props.clearErrors();
                            }}
                            style={{
                                container: {
                                    backgroundColor:
                                        variant === "error" ? "red" : "green"
                                }
                            }}
                        />
                    ))}
                <ScrollView style={utilis.child_container_password}>
                    <KeyboardAvoidingView
                        style={{
                            flex: 1,
                            flexDirection: "column",
                            justifyContent: "center"
                        }}
                        behavior='padding'
                        enabled
                        keyboardVerticalOffset={100}
                    >
                        <View style={styles.top}>
                            <Text
                                style={{
                                    ...utilis.text_header,
                                    ...utilis.margin_bottom_sm
                                }}
                            >
                                Enter your password
                            </Text>
                            <Text
                                style={{
                                    ...utilis.text_sm,
                                    ...utilis.margin_bottom_sm
                                }}
                            >
                                Welcome {userdata && userdata.firstName}. Please
                                enter your password to continue
                            </Text>
                        </View>

                        <InputField
                            onChangeText={text => {
                                this.handleText(text, "password");
                            }}
                            autoCapitalize='none'
                            value={this.state.password}
                            secureTextEntry={this.state.hidden}
                            placeholder='********'
                            style={{ marginBottom: 50 }}
                        />

                        {!loading ? (
                            <Button
                                title='Continue'
                                disabled={
                                    this.state.password === "" ? true : false
                                }
                                onPress={() => {
                                    this.setState({ loading: true });
                                    this.handleSubmit();
                                }}
                                style={{ marginBottom: 10 }}
                            />
                        ) : (
                            <ActivityIndicator
                                size='small'
                                color='#fff'
                                style={{
                                    marginBottom: 10,
                                    backgroundColor: "#121B74",
                                    paddingTop: 15,
                                    paddingBottom: 15,
                                    borderRadius: 5
                                }}
                            />
                        )}
                    </KeyboardAvoidingView>
                </ScrollView>
            </React.Fragment>
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
    { userLogin, clearErrors }
)(PasswordScreen);
