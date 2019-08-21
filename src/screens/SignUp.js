import * as React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Snackbar } from "react-native-material-ui";
import isEmpty from "../utils/is.empty";
import Tabs from "../components/Tabs";
import { snackBarGen } from "../utils/errors/errorHandler";
import { userLogin, userMe } from "../resources/redux-actions/auth";
import "../styles/core/utilis";
import "../styles/core/form";
import { Icon } from "native-base";

class SignUp extends React.Component {
    state = {
        email: "",
        mobile: "",
        password: "",
        load: "",
        snackbar: "",
        loading: false
    };

    // console.log(props.auth);
    // if (props.auth.isAuthenticated) {
    //     props.navigation.navigate("Confirmation");
    // }

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
        console.log(this.state, "NAVOGATE PARAMS CHECK");
        const base = props.navigation.getParam("base", "");
        displayTheSnack$ = isEmpty(props.errors)
            ? null
            : snackBarGen(props.errors);

        return (
            <View style={styles.container}>
                <View style={utilis.child_container}>
                    <Text style={utilis.text}>The basic</Text>
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
                                    this.handleText(text, "email");
                                }}
                                placeholder='First Name'
                            />
                        </View>

                        <View style={form.form_right}>
                            <InputField
                                onChangeText={text => {
                                    this.handleText(text, "fName");
                                }}
                                placeholder='Last Name'
                            />
                        </View>
                    </View>
                    <View style={form.form_control}>
                        <InputField
                            onChangeText={text => {
                                this.handleText(text, "lName");
                            }}
                            placeholder='Date of birth'
                        />
                    </View>

                    {base === "email" ? (
                        <View style={form.form_control}>
                            <InputField
                                onChangeText={text => {
                                    this.handleText(text, "lName");
                                }}
                                placeholder='Mobile'
                            />
                        </View>
                    ) : (
                        <View style={form.form_control}>
                            <InputField
                                onChangeText={text => {
                                    this.handleText(text, "lName");
                                }}
                                placeholder='Email'
                            />
                        </View>
                    )}

                    <View style={form.form_control}>
                        <InputField
                            onChangeText={text => {
                                this.handleText(text, "lName");
                            }}
                            placeholder='Gender'
                        />
                    </View>
                    <View style={form.form_control}>
                        <InputField
                            onChangeText={text => {
                                this.handleText(text, "lName");
                            }}
                            placeholder='Password'
                            secureTextEntry={true}
                        />
                    </View>

                    <View style={form.form_control}>
                        <InputField
                            onChangeText={text => {
                                this.handleText(text, "lName");
                            }}
                            placeholder='Set Password'
                            secureTextEntry={true}
                        />
                    </View>

                    {!loading ? (
                        // <Button
                        // 	disabled={this.disableSubmit()}
                        // 	title={"Sign In"}
                        // 	onPress={() => {
                        // 		// setLoad(true);
                        // 		const { state, props } = this;
                        // 		this.setState({ loading: true });
                        // 		props.userLogin({
                        // 			emailormobile: state.numorEmail,
                        // 			password: state.password,
                        // 		});
                        // 	}}
                        // />
                        <Icon
                            name='arrow-round-forward'
                            style={utilis.next_icon}
                            // type="FontAwesome"
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
    { userLogin, userMe }
)(SignUp);
