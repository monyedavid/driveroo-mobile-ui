import React from "react";
import { StyleSheet } from "react-native";

export default landing = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	image_container: {
		height: "56%",
		backgroundColor: "#0803A5",
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		// width: "100%",
		height: 50,
		resizeMode: "cover",
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
	icon: {
		marginRight: 10,
		height: 17,
	},
	footer: {
		position: "absolute",
		bottom: 0,
		left: 0,
		borderTopColor: "#c7c7c7",
		borderTopWidth: 1,
		width: "100%",
		padding: 15,
		borderWidth: 1,
		backgroundColor: "#E4E4E4",
	},
	footer_child: {
		// maxWidth: 350,
		// marginLeft: "auto",
		// marginRight: "auto",
		// width: "100%",
		padding: 10,
		textAlign: "center",
	},
});
