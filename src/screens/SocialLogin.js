import React from "react";
import { View, StyleSheet, Image, Text, TouchableHighlight } from "react-native";
import { Icon } from "native-base";
import "../styles/core/utilis";
import utilis from "../styles/core/utilis";

export default function SocailLogin(props) {
	return (
		<View style={styles.container}>
			<View style={utilis.child_container}>
				<Image source={require("../assets/images/left-arrow.png")} style={utilis.margin_bottom_lg} />
				<Text style={{ ...utilis.text, ...utilis.margin_bottom }}>Choose an account</Text>
			</View>
			<View>
				<View style={{ ...utilis.flex_horizaontal, ...styles.tab }}>
					<Image source={require("../assets/images/facebook.png")} style={{ height: 20 }} resizeMode="contain" />
					<View style={styles.wide_layout}>
						<Text style={utilis.text_light}>Facebook</Text>
					</View>
					<TouchableHighlight
						onPress={() => {
							props.navigation.navigate("Login");
						}}>
						<Image source={require("../assets/images/right-arrow.png")} style={{ height: 20 }} resizeMode="contain" />
					</TouchableHighlight>
				</View>
				<View style={{ ...utilis.flex_horizaontal, ...styles.tab_bottom }}>
					<Image source={require("../assets/images/search.png")} style={{ height: 20 }} resizeMode="contain" />
					<View style={styles.wide_layout}>
						<Text style={utilis.text_light}>Google</Text>
					</View>
					<Image source={require("../assets/images/right-arrow.png")} style={{ height: 20 }} resizeMode="contain" />
				</View>
			</View>
		</View>
	);
}

SocailLogin.navigationOptions = {
	headers: null,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 55,
	},
	tab: {
		paddingTop: 25,
		paddingLeft: 29,
		paddingBottom: 15,
		borderTopWidth: 1,
		paddingRight: 29,
		borderColor: "#c7c7c7",
	},
	tab_bottom: {
		paddingTop: 25,
		paddingLeft: 29,
		paddingBottom: 15,
		borderTopWidth: 1,
		paddingRight: 29,
		borderBottomWidth: 1,
		borderColor: "#c7c7c7",
	},
	wide_layout: {
		marginLeft: 10,
		flex: 2,
	},
});
