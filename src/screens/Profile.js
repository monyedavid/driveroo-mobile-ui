import * as React from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { userReg } from "../resources/redux-actions/auth";
import "../styles/core/utilis";

function Profile(props) {
    const [firstName, setFirstame] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirm, setConfirm] = React.useState("");

    return (
        <View style={styles.container}>
            <View style={utilis.child_container}>
                <Text style={{ ...utilis.text, ...utilis.margin_bottom_lg }}>
                    Setup profile
                </Text>
                <InputField
                    autoFocus={true}
                    onChangeText={text => {
                        setFirstame(text);
                    }}
                    placeholder='First name'
                />
                <InputField
                    onChangeText={text => {
                        setLastname(text);
                    }}
                    placeholder='Last name'
                />
                <InputField
                    onChangeText={text => {
                        setEmail(text);
                    }}
                    placeholder='Email address'
                />
                <InputField
                    onChangeText={text => {
                        setPassword(text);
                    }}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <InputField
                    onChangeText={text => {
                        setConfirm(text);
                    }}
                    placeholder
                    placeholder='Confirm password'
                />
                <Button
                    title={"Continue"}
                    style={styles.margin_top}
                    onPress={() => {
                        console.log("funky");
                        // props.navigation.navigate("Verification");
                    }}
                />
            </View>
        </View>
    );
}

Profile.navigationOptions = {
    title: "Profile"
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 55
    },
    margin_top: {
        marginTop: 50
    }
});

export default connect(
    null,
    { userReg }
)(Profile);
