import * as WebBrowser from "expo-web-browser";
import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function Input(props) {
	return (
		<TextInput
			{...props}
			style={{ ...styles.field, ...props.style }}
			placeholderTextColor="#000"
			ref={props.inputRef}
			autoCapitalize="none"
			autoComplete="off"
		/>
	);
}

const styles = StyleSheet.create({
	field: {
		// marginBottom: 10,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		// fontSize: 17,
		backgroundColor: "#C4C4C4",
		// borderWidth: 1,
		// borderColor: "red",
	},
});
