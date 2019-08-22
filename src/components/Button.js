import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ButtonClass(props) {
	const [type, setType] = useState("clear");

	return (
		<TouchableOpacity
			{...props}
			// onPress={props.onPress}
			style={[
				props.type !== "clear" ? styles.button : styles.button_transparent,
				props.style,
			]}
		>
			<Text style={[props.type === "clear" ? styles.text_clear : styles.text]}>
				{props.title || "Enter"}
			</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#121B74",
		maxWidth: 350,
		// width: "100%",
		// borderBottomWidth: 2,
		// borderColor: "#002257",
		justifyContent: "center",
		alignItems: "center",
		// marginTop: 20,
		borderRadius: 5,
		// marginBottom: 20,
		paddingTop: 15,
		paddingBottom: 15,
	},
	button_transparent: {
		backgroundColor: "white",
		borderColor: "#121B74",
		// maxWidth: 350,
		// width: "100%",
		borderWidth: 1,
		// borderColor: "#002257",
		justifyContent: "center",
		alignItems: "center",
		// marginTop: 20,
		borderRadius: 5,
		paddingTop: 15,
		paddingBottom: 15,
		color: "#121B74",
	},
	text: {
		fontSize: 15,
		// textAlign: "center",
		fontWeight: "500",
		color: "#fff",
	},
	text_clear: {
		fontSize: 16,
		// textAlign: "center",
		fontWeight: "600",
		color: "#121B74",
	},
});
