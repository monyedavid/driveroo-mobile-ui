import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import moment from "moment-timer";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "../styles/core/utilis";
import Timer from "../components/Timer";
import { utilis, textColor } from "../styles/core/utilis";

export default function OtpVerification(props) {
	return (
		<View style={styles.container}>
			<View style={utilis.child_container}>
				<View style={styles.top}>
					<Text style={{ ...utilis.text_header, ...utilis.margin_bottom_sm }}>
						We sent you a 4-digit code
					</Text>
					<Text style={{ ...utilis.text_sm, ...utilis.margin_bottom_sm }}>
						Enter the 4-digit code we sent to
					</Text>
					<Text style={styles.number}>+234-81234567</Text>
				</View>
				{/* <View style={styles.flex}>
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
				</View> */}

				<InputField
					onChangeText={text => {
						this.handleText(text, "firstName");
					}}
					placeholder="Enter Code"
					style={{ marginBottom: 50 }}
				/>

				<Button
					title="Continue"
					onPress={() => {
						props.navigation.navigate("Login");
					}}
					style={{ marginBottom: 10 }}
				/>
				<Button title="Get started with email instead" type="clear" />

				<Text style={styles.footer}>
					By signing up, you confirm that you agree to our Terms of Use and have
					read and understood our Privacy Policy
				</Text>
			</View>
		</View>
	);
}

OtpVerification.navigationOptions = {
	headers: null,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 55,
	},
	flex: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	input_width: {
		width: 50,
		borderColor: "red",
		textAlign: "center",
	},
	number: {
		fontWeight: "600",
		color: "#000",
		fontSize: 16,
		// margin_ottom: 5,
	},
	top: {
		marginBottom: 60,
		height: "40%",
	},
	footer: {
		fontSize: 11,
		color: "#666666",
		opacity: 0.7,
		textAlign: "center",
		marginTop: 50,
	},
});
