import React from "react";
import { StyleSheet } from "react-native";

export default (verification = StyleSheet.create({
	container: {
		borderBottomWidth: 1,
		borderBottomColor: "#f3f3f3",
		paddingBottom: 10,
	},
	container_no_border: {
		borderBottomWidth: 0,
		paddingBottom: 10,
	},
}));
