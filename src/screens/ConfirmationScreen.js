import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import moment from "moment-timer";
// import InputField from "../components/InputField";
import Button from "../components/Button";
import "../styles/core/utilis";
import { connect } from "react-redux";
import { userLogout } from "../resources/redux-actions/auth";
import { Icon } from "native-base";
import { AuthSession } from "expo";

class ConfirmationScrenn extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.auth !== this.props.auth) {
            this.props.navigation.navigate("Home");
        }
    }

    render() {
        const email = this.props.navigation.getParam("email", "");
        const name = this.props.navigation.getParam("firstName", "");
        return (
            <View style={styles.container}>
                <View style={utilis.child_container}>
                    <View style={styles.image_container}>
                        <Image
                            source={require("../assets/images/check.png")}
                            style={styles.image}
                        />
                    </View>

                    <Text
                        style={{
                            ...utilis.text_sm_black,
                            maxWidth: 250,
                            marginLeft: "auto",
                            marginRight: "auto"
                        }}
                    >
                        {`We have sent a confirmation to ${email} to activate your account`}
                    </Text>
                    <Icon
                        name='arrow-round-forward'
                        style={utilis.next_icon}
                        onPress={() => {
                            // navigate to the last page with £{name}
                        }}
                    />
                </View>
            </View>
        );
    }
}

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
        marginTop: 55,
        alignItems: "center",
        flexDirection: "column"
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
    }
});
