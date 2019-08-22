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

    handleSubmit = () => {
        const email = this.props.navigation.getParam("email", "");
        const mobile = this.props.navigation.getParam("mobile", "");
        if (email) {
            console.log("trying submit with email|", email);
        }

        if (mobile) {
            console.log("trying submit mobile |", mobile);
        }
    };

    snackbarClose = (e, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setSnackbar(false);
    };

    componentDidUpdate() {
        if (this.props.isAuthenticated) {
            console.log("redirect to last page :)");
        }
    }

    render() {
        const { props } = this;
        const userdata = this.props.navigation.getParam("userdata", "");
        displayTheSnack$ = isEmpty(props.errors)
            ? null
            : snackBarGen(props.errors);

        return (
            <View style={styles.container}>
                <View style={utilis.child_container}>
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
                        placeholder='********'
                        style={{ marginBottom: 50 }}
                    />

                    <Button
                        title='Continue'
                        disabled={this.state.password === "" ? true : false}
                        onPress={() => {
                            this.handleSubmit();
                        }}
                        style={{ marginBottom: 10 }}
                    />
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
