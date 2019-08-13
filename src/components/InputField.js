import * as WebBrowser from "expo-web-browser";
import React from "react";
import { TextInput, Text, View, StyleSheet } from "react-native";

export default function Input(props) {
	return (
		<TextInput
			{...props}
			// placeholder={props.placeholder || ""}
			// name={props.email || "Email"}
			// autoCapitalize="none"
			// onChangeText={text => {
			// 	this.handleInputChange(text, "email");
			// }}
			// secureTextEntry={props.password || false}
			style={{ ...styles.field, ...props.style }}
			placeholderTextColor="#748078"
			ref={props.inputRef}
		/>
	);
}

const styles = StyleSheet.create({
	field: {
		borderBottomColor: "#c7c7c7",
		borderBottomWidth: 1,
		marginBottom: 15,
		paddingTop: 15,
		paddingBottom: 26,
		fontSize: 17,
		// borderWidth: 1,
		// borderColor: "red",
		// backgroundColor: "red",
	},
});
