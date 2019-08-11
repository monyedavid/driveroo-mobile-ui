import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function VerificationScreen() {
	return (
		<View style={styles.container}>
			<Text>OTP Verification</Text>
			<Text>Enter the 4-digit code sent to you</Text>
			<Text>+234 7054727840</Text>
			{/* <Text>Resend Code in 02:59</Text> */}
		</View>
	);
}

VerificationScreen.navigationOptions = {
	headerTitle: "Step 1 of 4: Identification",
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
