import React from "react";
import { StyleSheet } from "react-native";

export default landing = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	image_container: {
		// backgroundColor: "#0803A5",
		// justifyContent: "center",
		alignItems: "flex-end",
		// flex: 1,
		height: 300,
	},
	image: {
		width: "82%",
		height: 300,
		resizeMode: "cover",
		overflow: "hidden",
	},
	logo: {
		marginBottom: 50,
		marginTop: -30,
	},
	form: {
		borderBottomColor: "#C8C8C8",
		borderBottomWidth: 1,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10,
	},
	// overlay: {
	// 	width: "100%",
	// 	height: "100%",
	// 	backgroundColor: "rgba(0,0,0,0.7)",
	// 	position: "absolute",
	// 	top: 0,
	// 	left: 0,
	// },
	country: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 15,
		// borderWidth: 1,
	},
	footer: {
		fontSize: 11,
		color: "#666666",
		opacity: 0.7,
		textAlign: "center",
	},
});
