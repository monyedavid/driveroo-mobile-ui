import React from "react";
import { StyleSheet } from "react-native";

const pre_style = {
	text: {
		color: "#002257",
		fontSize: 17,
		fontWeight: "700",
	},
};

const styles = {
	...pre_style,
	child_container: {
		maxWidth: 350,
		width: "100%",
		marginLeft: "auto",
		marginRight: "auto",
		paddingTop: 30,
	},
	text_light: {
		...pre_style.text,
		fontWeight: "400",
	},

	text_gray: {
		color: "#878787",
		fontSize: 13,
		marginTop: 5,
	},
	text_center: {
		textAlign: "center",
	},
	flex_horizaontal: {
		flexDirection: "row",
		alignItems: "center",
	},
	margin_bottom: {
		marginBottom: 35,
	},
	margin_bottom_lg: {
		marginBottom: 50,
	},
};

export default (utilis = StyleSheet.create(styles));
