import React from "react";
import { StyleSheet } from "react-native";

const pre_style = {
	text_sm: {
		fontSize: 13,
	},

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
	text_sm_gray: {
		...pre_style.text_sm,
		color: "#878787",
		marginTop: 5,
	},
	text_sm_black: {
		...pre_style.text_sm,
		color: "#000",
	},

	text_sm_blue: {
		...pre_style.text_sm,
		color: "#002257",
		marginTop: 5,
	},
	text_gray: {
		color: "#878787",
		marginTop: 5,
		fontSize: 17,
	},
	text_center: {
		textAlign: "center",
	},
	flex_horizaontal: {
		flexDirection: "row",
		alignItems: "center",
	},
	margin_bottom_sm: {
		marginBottom: 15,
	},
	margin_bottom: {
		marginBottom: 35,
	},
	margin_bottom_lg: {
		marginBottom: 50,
	},
};

export default (utilis = StyleSheet.create(styles));
