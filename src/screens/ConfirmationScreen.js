import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import moment from "moment-timer";
// import InputField from "../components/InputField";
import Button from "../components/Button";
import "../styles/core/utilis";
import { connect } from "react-redux";
import { userLogout } from "../resources/redux-actions/auth";

class ConfirmationScrenn extends React.Component {
	componentDidUpdate(prevProps) {
		if (prevProps.auth !== this.props.auth) {
			this.props.navigation.navigate("Home");
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={utilis.child_container}>
					<Text style={{ ...utilis.text_center, ...utilis.text }}>Thank you for registering with us</Text>
					<View style={styles.image_container}>
						<Image source={require("../assets/images/thumb_up.png")} style={styles.image} />
					</View>

					<Text style={{ ...utilis.text_center, ...utilis.text_sm_black }}>We will get back to you shortly </Text>

					<Button
						title={"Logout"}
						style={styles.margin_top}
						onPress={() => {
							this.props.userLogout();
						}}
					/>
				</View>
			</View>
		);
	}
}

const map_state_to_props = state => ({
	auth: state.auth,
});

export default connect(
	map_state_to_props,
	{ userLogout },
)(ConfirmationScrenn);

ConfirmationScrenn.navigationOptions = {
	headers: null,
	headerLeft: null,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 55,
	},
	image: {
		width: 170,
		height: 170,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 80,
		marginBottom: 80,
	},
	image_container: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
	margin_top: {
		marginTop: 15,
	},
});
