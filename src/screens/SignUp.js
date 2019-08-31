import * as React from "react";
import { connect } from "react-redux";
import {
    View,
    StyleSheet,
    Text,
    ActivityIndicator,
    ScrollView
} from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
import isEmpty from "../utils/is.empty";
import { snackBarGen } from "../utils/errors/errorHandler";
import { userReg } from "../resources/redux-actions/auth";
import { KeyboardAvoidingView } from "react-native";
import { Snackbar } from "react-native-material-ui";
import { clearErrors } from "../resources/redux-actions/shared";
import "../styles/core/utilis";
import "../styles/core/form";
import { utilis } from "../styles/core/utilis";

class SignUp extends React.Component {
    state = {
        email: "",
        mobile: "",
        password: "",
        firstName: "",
        confirm: "",
        lastName: "",
        gender: "",
        snackbar: "",
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

    handleText(value, name) {
        this.setState({
            [name]: value
        });
    }

    setLoadFalse = () => {
        this.setState({ loading: false });
    };

    disableSubmit = () => {
        if (
            this.state.email === "" ||
            this.state.mobile === "" ||
            this.state.password === "" ||
            this.state.firstName === "" ||
            this.state.confirm === "" ||
            this.state.lastName === "" ||
            this.state.gender === ""
        )
            return true;

        return false;
    };

    render() {
        const { props } = this;
        const { loading } = this.state;
        const base = props.navigation.getParam("base", "");
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
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicato={false}
                    style={utilis.child_container}
                >
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
                        <View>
                            <Text style={utilis.text_header}>The basic</Text>
                            <Text
                                style={{
                                    ...utilis.text_sm,
                                    ...utilis.margin_bottom_lg
                                }}
                            >
                                Give us a few details about yourself so we can
                                identify you
                            </Text>
                            <View style={form.form_flex}>
                                <View style={form.form_left}>
                                    <InputField
                                        autoFocus={true}
                                        value={this.state.firstName}
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
                                        value={this.state.lastName}
                                        placeholder='Last Name'
                                    />
                                </View>
                            </View>
                            {base === "email" ? (
                                <View style={form.form_control}>
                                    <InputField
                                        value={this.state.mobile}
                                        onChangeText={text => {
                                            this.handleText(text, "mobile");
                                        }}
                                        placeholder='Mobile'
                                    />
                                </View>
                            ) : (
                                <View style={form.form_control}>
                                    <InputField
                                        value={this.state.email}
                                        onChangeText={text => {
                                            this.handleText(text, "email");
                                        }}
                                        placeholder='Email'
                                    />
                                </View>
                            )}

                            <View style={form.form_control}>
                                <InputField
                                    value={this.state.gender}
                                    onChangeText={text => {
                                        this.handleText(text, "gender");
                                    }}
                                    placeholder='Gender'
                                />
                            </View>
                            <View style={form.form_control}>
                                <InputField
                                    value={this.state.password}
                                    onChangeText={text => {
                                        this.handleText(text, "password");
                                    }}
                                    placeholder='Set Password'
                                    secureTextEntry={true}
                                />
                            </View>

                            <View style={form.form_control}>
                                <InputField
                                    value={this.state.confirm}
                                    onChangeText={text => {
                                        this.handleText(text, "confirm");
                                    }}
                                    placeholder='Confirm Password'
                                    secureTextEntry={true}
                                />
                            </View>

                            <View style={form.form_control}>
                                {!loading ? (
                                    <Button
                                        title='Continue'
                                        disabled={this.disableSubmit()}
                                        style={{ marginBottom: 10 }}
                                        onPress={() => {
                                            this.setState({ loading: true });
                                            props.userReg(
                                                { ...this.state },
                                                props.navigation.navigate,
                                                this.setLoadFalse
                                            );
                                        }}
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
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </React.Fragment>
        );
    }
}

SignUp.navigationOptions = {
    headers: null
};

const map_state_to_props = ({ auth, errors }) => ({
    isAuthenticated: auth.isAuthenticated,
    errors
});

export default connect(
    map_state_to_props,
    { userReg, clearErrors }
)(SignUp);
