import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import moment from "moment-timer";
// import InputField from "../components/InputField";
import Button from "../../components/Button";
import { utilis, textColor } from "../../styles/core/utilis";
import { connect } from "react-redux";
import { userLogout } from "../../resources/redux-actions/auth";
class ConfirmationScrenn extends React.Component {
    componentDidUpdate() {
        if (this.props.auth.isAuthenticated) {
            return;
        }
        console.log("go to home");
    }

    handleSubmit = () => {
        const { navigation } = this.props;
        const incompleteProfile = navigation.getParam("incompleteProfile", "");
        if (incompleteProfile) {
            navigation.navigate("Profile", {
                incompleteProfile
            });
            return;
        }

        // naviagte to main dashboard [ACCOUNT STATUS]
        // DEFINE CHECKS FOR STAGES OF ONBOARD COMPLETMENT
        navigation.navigate("HomePage");
    };

    render() {
        const emailormobile = this.props.navigation.getParam(
            "emailormobile",
            ""
        );

        return (
            <View style={styles.container}>
                <View style={utilis.child_container}>
                    <View style={styles.image_container}>
                        <Image
                            source={require("../assets/images/check.png")}
                            style={styles.image}
                        />
                    </View>

                    <Text style={styles.confirm_text}>
                        {`Please click on the confirmation email we sent to ${emailormobile ||
                            "your driveroo mail"} to activate your account`}
                    </Text>

                    <Button
                        onPress={() => {
                            this.handleSubmit();
                        }}
                        style={{ borderColor: "white" }}
                        title='Continue'
                        type='clear'
                    />
                </View>
            </View>
        );
    }
}

ConfirmationScrenn.navigationOptions = {
    headers: null
};

const map_state_to_props = state => ({
    auth: state.auth
});

export default connect(
    map_state_to_props,
    { userLogout }
)(ConfirmationScrenn);

ConfirmationScrenn.navigationOptions = {
    headers: null,
    headerLeft: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 55,
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#10C971"
    },
    image: {
        width: 180,
        height: 180,
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "contain",
        marginTop: 80,
        marginBottom: 20
    },
    image_container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    margin_top: {
        marginTop: 15
    },
    confirm_text: {
        color: "white",
        maxWidth: 300,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 30,
        fontSize: 15,
        fontWeight: "600",
        textAlign: "center",
        marginBottom: 100
    }
});
