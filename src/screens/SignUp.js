import * as React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Snackbar } from "react-native-material-ui";
import isEmpty from "../utils/is.empty";
import { snackBarGen } from "../utils/errors/errorHandler";
import { userReg } from "../resources/redux-actions/auth";
import "../styles/core/utilis";
import "../styles/core/form";
import { Icon } from "native-base";
import { utilis, textColor } from "../styles/core/utilis";

class SignUp extends React.Component {
    state = {
        email: "",
        mobile: "",
        password: "",
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        load: "",
        snackbar: "",
        //	confirm: "",
        loading: false
    };

    componentDidMount() {
        const { navigation } = this.props;
        const base = navigation.getParam("base", "");
        const email = navigation.getParam("email", "");
        const mobile = navigation.getParam("mobile", "");
        if (base === "email") this.setState({ email });
        if (base === "mobile") this.setState({ mobile });
    }

    componentDidUpdate(prevProps) {}

    handleText(value, name) {
        this.setState({
            [name]: value
        });
    }

    disableSubmit = () => {};

    snackbarClose = (e, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setSnackbar(false);
    };

    render() {
        const { props } = this;
        const { loading } = this.state;
        const base = props.navigation.getParam("base", "");
        displayTheSnack$ = isEmpty(props.errors)
            ? null
            : snackBarGen(props.errors);

        return (
            <View style={styles.container}>
                <View style={utilis.child_container}>
                    <Text style={utilis.text_header}>The basic</Text>
                    <Text
                        style={{
                            ...utilis.text_sm_gray,
                            ...utilis.margin_bottom_lg
                        }}
                    >
                        Give us a few details about yourself so we can identify
                        you
                    </Text>
                    <View style={form.form_flex}>
                        <View style={form.form_left}>
                            <InputField
                                autoFocus={true}
                                onChangeText={text => {
                                    this.handleText(text, "firstName");
                                }}
                                placeholder='First Name'
                            />
                        </View>

                        <View style={form.form_right}>
                            <InputField
                                onChangeText={text => {
                                    this.handleText(text, "lastName");
                                }}
                                placeholder='Last Name'
                            />
                        </View>
                    </View>
                    {base === "email" ? (
                        <View style={form.form_control}>
                            <InputField
                                onChangeText={text => {
                                    this.handleText(text, "mobile");
                                }}
                                placeholder='Mobile'
                            />
                        </View>
                    ) : (
                        <View style={form.form_control}>
                            <InputField
                                onChangeText={text => {
                                    this.handleText(text, "email");
                                }}
                                placeholder='Email'
                            />
                        </View>
                    )}

                    <View style={form.form_control}>
                        <InputField
                            onChangeText={text => {
                                this.handleText(text, "gender");
                            }}
                            placeholder='Gender'
                        />
                    </View>
                    <View style={form.form_control}>
                        <InputField
                            onChangeText={text => {
                                this.handleText(text, "password");
                            }}
                            placeholder='Set Password'
                            secureTextEntry={true}
                        />
                    </View>

                    <View style={form.form_control}>
                        <InputField
                            onChangeText={text => {
                                this.handleText(text, "confirm");
                            }}
                            placeholder='Confirm Password'
                            secureTextEntry={true}
                        />
                    </View>

                    {!loading ? (
                        <Icon
                            name='arrow-round-forward'
                            style={utilis.next_icon}
                            onPress={() => {
                                console.log(this.state, "SIGNUP STATE DATA");
                                props.userReg(
                                    { ...this.state },
                                    props.navigation.navigate
                                );
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

SignUp.navigationOptions = {
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
    { userReg }
)(SignUp);
