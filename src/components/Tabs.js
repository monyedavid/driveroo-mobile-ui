import React from "react";
import "../styles/core/utilis";
import { Text, View } from "react-native";

const Tabs = ({ onClick, tab }) => (
	<View style={utilis.tab}>
		<Text
			onClcik={() => onClick("phone")}
			style={{ ...utilis.tab_text1, ...utilis.tab_active }}
		>
			Phone
		</Text>
		<Text onClcik={() => onClick("email")} style={utilis.tab_text2}>
			Email
		</Text>
	</View>
);

export default Tabs;
