import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import moment from "moment-timer";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "../styles/core/utilis";

export default function ConfirmationScrenn() {
    return (
        <View style={styles.container}>
            <View style={utilis.child_container}>
                <Text style={{ ...utilis.text_center, ...utilis.text }}>
                    Thank you for registering with us
                </Text>
                <View style={styles.image_container}>
                    <Image
                        source={require("../assets/images/thumb_up.png")}
                        style={styles.image}
                    />
                </View>

                <Text
                    style={{ ...utilis.text_center, ...utilis.text_sm_black }}
                >
                    We will get back to you shortly{" "}
                </Text>
            </View>
        </View>
    );
}

ConfirmationScrenn.navigationOptions = {
    headers: null,
    headerLeft: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 55
    },
    image: {
        width: 170,
        height: 170,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 80,
        marginBottom: 80
    },
    image_container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    }
});
