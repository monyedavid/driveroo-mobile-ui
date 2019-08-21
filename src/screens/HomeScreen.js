import * as React from "react";
import { connect } from "react-redux";
import {
    Image,
    Text,
    TextInput,
    View,
    ScrollView,
    ActivityIndicator
} from "react-native";
import "../styles/landing";
import "../styles/core/utilis";
import Button from "../components/Button";
import { userMe } from "../resources/redux-actions/auth";
import { KeyboardAvoidingView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import Tabs from "../components/Tabs";

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    state = {
        mobile: "",
        loading: false,
        isPhone: true
    };

    componentDidMount() {
        this.props.userMe();
    }

    disableSubmit = () => {
        const { mobile } = this.state;
        if (mobile !== "") {
            if (mobile.length === 11) return false;
            // check if mobile.length has alphabetic characters
        }

        return true;
    };

    handleSubmission = () => {
        if (!this.disableSubmit())
            this.props.navigation.navigate("OTP", {
                no: this.state.mobile
            });
    };

    componentDidUpdate(prevProps) {
        const props = this.props;

        // if (Object.keys(prevProps.auth.user).length !== Object.keys(props.auth.user).length) {
        if (props.auth.isAuthenticated) {
            // if (props.auth) {
            // if (props.auth.user) {
            // 	if (props.auth.user.user) {
            // 		console.log(props.auth.user.user);
            // 		if (props.auth.user.user.active)
            // 			props.navigation.navigate("Confirmation");
            // 		if (
            // 			props.auth.isAuthenticated &&
            // 			props.auth.user.user.active &&
            // 			!props.auth.user.user.confirmed
            // 		)
            // 			props.navigation.navigate("Profile");
            // 	}
            // }
        }
        // }
    }

    render() {
        const { loading, isPhone } = this.state;
        return (
            // {loading ? (
            // 	<ActivityIndicator size="small" color="#002257" />
            // ) :
            // (
            <KeyboardAwareScrollView
                contentContainerStyle={landing.container}
                // extraScrollHeight={30}
                resetScrollToCoords={{ x: 0, y: 0 }}
            >
                {/* <ScrollView contentContainerStyle={{ flex: 1 }}> */}
                <View style={landing.image_container}>
                    <Image
                        source={require("../assets/images/logo.png")}
                        style={landing.image}
                    />
                    {/* <View style={landing.overlay} /> */}
                </View>
                <View style={utilis.child_container}>
                    {/* <View> */}
                    <Text style={{ ...utilis.text, ...utilis.margin_bottom }}>
                        Get started with Driverroo
                    </Text>
                    <View style={utilis.tab}>
                        <Text
                            onPress={() => this.setState({ isPhone: true })}
                            style={[
                                utilis.tab_text1,
                                isPhone ? utilis.tab_active : ""
                            ]}
                        >
                            Phone
                        </Text>
                        <Text
                            onPress={() => this.setState({ isPhone: false })}
                            style={[
                                utilis.tab_text2,
                                !isPhone ? utilis.tab_active : ""
                            ]}
                        >
                            Email
                        </Text>
                    </View>
                    {isPhone ? (
                        <View style={landing.country}>
                            <Image
                                source={require("../assets/images/nigeria.png")}
                                style={landing.icon}
                            />
                            {/* <Text style={utilis.text_light}>+234 7054727840</Text> */}
                            <TextInput
                                autoFocus={true}
                                keyboardType='number-pad'
                                onChangeText={text => {
                                    this.setState({ mobile: text });
                                }}
                                placeholder={"+234"}
                            />
                        </View>
                    ) : (
                        <TextInput autoFocus={true} placeholder={"Email"} />
                    )}

                    <View>
                        <Text style={{ ...utilis.text, ...utilis.text_sm }}>
                            By signing up, you confirm that you agree to our
                            Terms of Use and have read and understood our
                            Privacy Policy. You will receive an SMS to confirm
                            your phone number. SMS fee may apply
                        </Text>
                    </View>
                </View>
                <View style={landing.footer}>
                    <Text
                        onPress={() => {
                            this.props.navigation.navigate("Login");
                        }}
                        style={landing.footer_child}
                    >
                        Already have an account? Login
                    </Text>
                </View>
                {/* </ScrollView> */}
            </KeyboardAwareScrollView>
        );
    }
}

const map_state_to_props = state => ({
    auth: state.auth
});

export default connect(
    map_state_to_props,
    { userMe }
)(HomeScreen);
