import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export default function Input(props) {
	const [focus, setFocus] = useState(true);

	return (
		<TextInput
			{...props}
			style={[focus ? styles.field_inactive : styles.field, { ...props.style }]}
			placeholderTextColor="#A6AAB4"
			ref={props.inputRef}
			autoCapitalize="none"
			autoComplete="off"
			onBlur={() => {
				setFocus(false);
			}}
			onFocus={() => {
				setFocus(true);
			}}
		/>
	);
}

const styles = StyleSheet.create({
	field: {
		// marginBottom: 10,
		paddingTop: 17,
		paddingBottom: 17,
		paddingLeft: 15,
		borderColor: "#121B74",
		fontSize: 14,
		borderWidth: 1,
		borderRadius: 5,

		// borderColor: "red",
	},
	field_inactive: {
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 15,
		borderColor: "#A6AAB4",
		fontSize: 14,
		borderWidth: 1,
		borderRadius: 5,
	},
});
