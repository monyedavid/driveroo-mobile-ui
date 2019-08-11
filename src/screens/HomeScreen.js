import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Image, ImageBackground, Platform, StyleSheet, Text, View } from "react-native";
import "../styles/landing";
import "../styles/core/utilis";
import Button from "../components/Button";

import { MonoText } from "../components/StyledText";

export default function HomeScreen() {
	return (
		<View style={landing.container}>
			<View style={landing.image_container}>
				<Image source={require("../assets/images/landing.jpg")} style={landing.image} />
				<View style={landing.overlay} />
			</View>

			<View style={utilis.child_container}>
				{/* <View> */}
				<Text style={{ ...utilis.text, ...utilis.margin_bottom }}>Get started with Driverroo</Text>
				<View style={landing.country}>
					<Image source={require("../assets/images/nigeria.png")} style={landing.icon} />
					<Text style={utilis.text_light}>+234 7054727840</Text>
				</View>
				<View>
					<Text style={{ ...utilis.text_gray, ...utilis.text_center }}>
						By continuing, I confirm that i have read & agree to the
					</Text>
					<Text style={{ ...utilis.text_gray, ...utilis.text_center }}>Terms & conditions and Privacy policy</Text>
				</View>
				<Button />
				{/* </View> */}
			</View>

			<View style={landing.footer}>
				<View style={landing.footer_child}>
					<Text>Or connect using a social media account</Text>
				</View>
			</View>
		</View>
	);
}

HomeScreen.navigationOptions = {
	header: null,
};
