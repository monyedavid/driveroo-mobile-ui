import React from "react";
import { View, StyleSheet, Text } from "react-native";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import "../../styles/core/utilis";

export default function ResetPassword() {
    return (
        <View style={styles.container}>
            <View style={utilis.child_container}>
                <InputField placeholder='Password' placeholder='*****' />
                <InputField
                    placeholder='Confirm password'
                    placeholder='*****'
                />
                <Button title={"Reset"} style={styles.margin_top} />
            </View>
        </View>
    );
}

ResetPassword.navigationOptions = {
    title: "Reset Password"
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15
    },
    margin_top: {
        marginTop: 50
    }
});
