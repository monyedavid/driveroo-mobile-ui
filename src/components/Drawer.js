import React from "react";
import { connect } from "react-redux";
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	View,
	Image,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from "react-native";
import { utilis } from "../styles/core/utilis";
import { LinearGradient } from "expo-linear-gradient";
import { menuArray } from "../routes/menu";
import { Icon } from "native-base";

const Drawer = ({ user: { user }, navigation }) => {
	function renderMenu() {
		return menuArray.map(({ icon, id, title, screen }) => (
			<TouchableWithoutFeedback
				onPress={() => navigation.navigate(screen)}
				key={id}
				style={{ backgroundColor: "red" }}
			>
				<View style={styles.menu_item_container}>
					<Image
						source={icon}
						style={{ marginRight: 15, height: 25, width: 25 }}
					/>
					<Text style={styles.menu_text}>{title}</Text>
				</View>
			</TouchableWithoutFeedback>
		));
	}

	return (
		<SafeAreaView>
			<TouchableOpacity
				transparent
				onPress={() => navigation.closeDrawer()}
				style={{ justifyContent: "flex-end", flexDirection: "row" }}
			>
				<Icon
					name="close"
					style={{ color: "#121B74", fontSize: 40, marginRight: 20 }}
				/>
			</TouchableOpacity>
			<View style={styles.top}>
				<Image
					source={{ uri: user && user.avatar }}
					style={{
						height: 70,
						width: 70,
						marginRight: 15,
						resizeMode: "cover",
					}}
				/>
				<View>
					<Text style={styles.text_name}>
						{user && `${user.firstName} ${user.lastName}`}
					</Text>
					<Text style={styles.text_rate}>0.0</Text>
				</View>
			</View>
			<LinearGradient colors={["#121B74", "#322FAF"]}>
				<View style={styles.confirmation}>
					<View style={styles.confirmation_top}>
						<Image
							source={require("../assets/images/warning-icon.png")}
							style={{
								height: 10,
								width: 10,
								marginRight: 5,
								resizeMode: "cover",
							}}
						/>
						{user && !user.confirmed && (
							<Text style={styles.text_confirmation}>
								Please verify your email to confirm your account
							</Text>
						)}
					</View>

					<View style={styles.confirmation_bottom}>
						<Text style={[utilis.text_center, styles.step]}>Step One</Text>
						<View style={styles.confirmation_progress}>
							<Image
								source={require("../assets/images/identify-yellow.png")}
								style={{
									height: 40,
									width: 40,
									marginRight: 10,
									resizeMode: "contain",
								}}
							/>
							<View>
								<Text
									style={{
										color: "#FFF2C0",
										fontWeight: "700",
										fontSize: 18,
									}}
								>
									Identification
								</Text>
								<Text
									style={{
										color: "#FFF2C0",
										fontWeight: "300",
										fontSize: 13,
									}}
								>
									In progress
								</Text>
							</View>
						</View>
						<Text style={[utilis.text_center, styles.text_please]}>
							Please be patient. We would contact you to proceed to the next
							step
						</Text>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("Status");
								navigation.closeDrawer();
							}}
							style={styles.confirmation_button}
						>
							<Text
								style={{
									color: "white",
									fontSize: 16,
									fontWeight: "700",
								}}
							>
								Account Status
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</LinearGradient>
			<View style={{ marginTop: 25 }}>{renderMenu()}</View>
			{/* <Text style={{ position: "absolute", bottom: 10 }}>
				Driverroo 2019. Version 1.1
			</Text> */}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// marginTop: 20,
	},
	top: {
		marginTop: 30,
		marginBottom: 50,
		flexDirection: "row",
		justifyContent: "flex-start",
		paddingLeft: 30,
		alignItems: "center",
	},
	text_name: {
		fontWeight: "700",
		color: "#121B74",
		fontSize: 15,
		marginBottom: 3,
	},
	text_rate: {
		color: "#1E1E1E",
		fontSize: 13,
	},
	confirmation_top: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		paddingTop: 15,
		paddingBottom: 15,
		borderBottomColor: "#929292",
		borderBottomWidth: 1,
	},
	text_confirmation: {
		fontSize: 12,
		color: "#FFF2C0",
	},
	step: {
		fontSize: 17,
		fontWeight: "700",
		color: "white",
		marginTop: 15,
	},
	text_please: {
		maxWidth: "50%",
		color: "white",
		marginRight: "auto",
		marginLeft: "auto",
		fontSize: 13,
		marginBottom: 5,
	},
	confirmation_button: {
		backgroundColor: "#121B74",
		width: "60%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		paddingTop: 12,
		paddingBottom: 12,
		borderColor: "white",
		borderWidth: 1,
		backgroundColor: "transparent",
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: 15,
		marginBottom: 15,
	},
	confirmation_progress: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 10,
		marginBottom: 15,
	},
	menu_item_container: {
		flexDirection: "row",
		// justifyContent: "center",
		width: "60%",
		marginLeft: 35,
		// marginRight: "auto",
		alignItems: "center",
		paddingTop: 15,
		paddingBottom: 15,
	},
	menu_text: {
		fontSize: 17,
		color: "#121B74",
		fontWeight: "600",
	},
});

const map_state_to_props = ({ auth }) => ({
	user: auth.user,
});

export default connect(
	map_state_to_props,
	{},
)(Drawer);
