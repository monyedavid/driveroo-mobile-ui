import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "../styles/core/utilis";

export default function LoginScreen(props) {
    return (
        <View style={styles.container}>
            <View style={utilis.child_container}>
                <Text style={{ ...utilis.text, ...utilis.margin_bottom_lg }}>
                    OTP Verification
                </Text>
                <InputField placeholder='Password' />
                <Button
                    title={"Sign In"}
                    onPress={() => {
                        props.navigation.navigate("Profile");
                    }}
                />

                <Text style={utilis.text}>Forgot password?</Text>
            </View>
        </View>
    );
}

LoginScreen.navigationOptions = {
    headers: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 55
    }
});
