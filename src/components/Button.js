import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "native-base";

export default function Form(props) {
	return (
		<Button style={{ ...styles.button, ...props.style }}>
			<Text style={styles.text}>{props.title || "Enter"}</Text>
		</Button>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#002257",
		paddingTop: 13,
		paddingBottom: 13,
		width: "100%",
		borderBottomWidth: 2,
		borderColor: "#002257",
		justifyContent: "center",
		marginTop: 20,
		borderRadius: 20,
		marginBottom: 20,
	},
	text: { fontSize: 17, textAlign: "center", fontWeight: "700", color: "#fff", textTransform: "uppercase" },
});
