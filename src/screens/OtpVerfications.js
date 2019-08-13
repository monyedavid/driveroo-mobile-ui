import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import moment from "moment-timer";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "../styles/core/utilis";
import Timer from "../components/Timer";

export default function OtpVerification(props) {
    let inputElement = [];

    useEffect(() => {
        inputElement[0].focus();
    });

    function moveRef(index, text) {
        if (text.length === 1 && index !== 3) inputElement[++index].focus();
        if (index === 3) {
            props.navigation.navigate("Login");
        }
    }

    return (
        <View style={styles.container}>
            <View style={utilis.child_container}>
                <Text style={{ ...utilis.text, ...utilis.margin_bottom_sm }}>
                    OTP Verification
                </Text>
                <View style={styles.flex}>
                    <InputField
                        style={styles.input_width}
                        inputRef={el => (inputElement[0] = el)}
                        // ref={ref => (inputRef[0] = ref)}
                        onChangeText={text => moveRef(0, text)}
                    />
                    <InputField
                        style={styles.input_width}
                        inputRef={el => (inputElement[1] = el)}
                        onChangeText={text => moveRef(1, text)}
                    />
                    <InputField
                        style={styles.input_width}
                        inputRef={el => (inputElement[2] = el)}
                        onChangeText={text => moveRef(2, text)}
                    />
                    <InputField
                        style={styles.input_width}
                        inputRef={el => (inputElement[3] = el)}
                        onChangeText={text => moveRef(3, text)}
                    />
                </View>

                <Button
                    title='Submit'
                    onPress={() => {
                        props.navigation.navigate("Login");
                    }}
                />
                <Timer />
            </View>
        </View>
    );
}

OtpVerification.navigationOptions = {
    headers: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 55
    },
    flex: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    input_width: {
        width: 50,
        borderColor: "red",
        textAlign: "center"
    }
});
