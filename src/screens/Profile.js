import React from "react";
import { View, StyleSheet, Text } from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "../styles/core/utilis";

export default function Profile() {
	return (
		<View style={styles.container}>
			<View style={utilis.child_container}>
				<Text style={{ ...utilis.text, ...utilis.margin_bottom_lg }}>Setup profile</Text>
				<InputField placeholder="First name" />
				<InputField placeholder="Last name" />
				<InputField placeholder="Email address" />
				<InputField placeholder="Password" />
				<InputField placeholder="Confirm password" />
				<Button title={"Continue"} style={styles.margin_top} />
			</View>
		</View>
	);
}

Profile.navigationOptions = {
	title: "Profile",
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 55,
	},
	margin_top: {
		marginTop: 50,
	},
});
