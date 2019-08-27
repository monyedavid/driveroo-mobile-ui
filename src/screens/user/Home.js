import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Button from "../../components/Button";
import { userReg } from "../../resources/redux-actions/auth";
import { utilis, textColor } from "../../styles/core/utilis";
import { Icon } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";

class Home extends Component {
	// state = {
	//     firstName: "",
	//     lastname: "",
	//     email: "",
	//     password: "",
	//     confirm: "",
	//     date: "2016-05-15",
	//     loading: false
	// };

	static navigationOptions = ({ navigation }) => {
		return {
			headerLeft: (
				<View>
					<TouchableOpacity transparent onPress={() => navigation.openDrawer()}>
						<Icon
							name="menu"
							style={{
								color: "#121B74",
								fontSize: 24,
								marginLeft: 20,
							}}
						/>
					</TouchableOpacity>
				</View>
			),
			headerTitle: "Home",
		};
	};

	render() {
		return (
			<ScrollView style={styles.container}>
				<LinearGradient colors={["#121B74", "#322FAF"]}>
					<View style={styles.earning}>
						<View>
							<Text style={styles.earning_text}>Account Status</Text>
							<Text style={[styles.earning_text_bg, { color: "#FFF2C0" }]}>
								In Progress
							</Text>
						</View>

						<View>
							<Text style={styles.earning_text}>Earnings (This Week)</Text>
							<Text style={[styles.earning_text_bg, { color: "#10C971" }]}>
								NGN15,722
							</Text>
						</View>
					</View>
				</LinearGradient>
				<View style={{ backgroundColor: "#f5f5f5" }}>
					<View style={utilis.child_container_lg}>
						<View style={[styles.histories]}>
							<View style={styles.history}>
								<View style={styles.left}>
									<Image
										source={require("../../assets/images/driver_dp.png")}
										style={styles.image}
									/>
									<View>
										<Text style={styles.name}>Emeka</Text>
										<Image source={require("../../assets/images/rating.png")} />
									</View>
								</View>

								<View style={styles.right}>
									<Image
										source={require("../../assets/images/location-path.png")}
										style={{ height: 40, resizeMode: "contain" }}
									/>
									<View>
										<Text
											style={[
												styles.text_status,
												textColor("#92A1B1"),
												{ marginBottom: 10 },
											]}
										>
											Ikoyi
										</Text>
										<Text style={[styles.text_status, textColor("#92A1B1")]}>
											Surulere
										</Text>
									</View>
								</View>
							</View>

							<View style={styles.history}>
								<View style={styles.left}>
									<Image
										source={require("../../assets/images/driver_dp.png")}
										style={styles.image}
									/>
									<View>
										<Text style={styles.name}>Emeka</Text>
										<Image source={require("../../assets/images/rating.png")} />
									</View>
								</View>

								<View style={styles.right}>
									<Image
										source={require("../../assets/images/location-path.png")}
										style={{ height: 40, resizeMode: "contain" }}
									/>
									<View>
										<Text
											style={[
												styles.text_status,
												textColor("#92A1B1"),
												{ marginBottom: 10 },
											]}
										>
											Ikoyi
										</Text>
										<Text style={[styles.text_status, textColor("#92A1B1")]}>
											Surulere
										</Text>
									</View>
								</View>
							</View>

							<View style={styles.history}>
								<View style={styles.left}>
									<Image
										source={require("../../assets/images/driver_dp.png")}
										style={styles.image}
									/>
									<View>
										<Text style={styles.name}>Emeka</Text>
										<Image source={require("../../assets/images/rating.png")} />
									</View>
								</View>

								<View style={styles.right}>
									<Image
										source={require("../../assets/images/location-path.png")}
										style={{ height: 40, resizeMode: "contain" }}
									/>
									<View>
										<Text
											style={[
												styles.text_status,
												textColor("#92A1B1"),
												{ marginBottom: 10 },
											]}
										>
											Ikoyi
										</Text>
										<Text style={[styles.text_status, textColor("#92A1B1")]}>
											Surulere
										</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
				</View>

				<View style={styles.earning_bottom}>
					<View style={styles.bottom_flex}>
						<Image
							source={require("../../assets/images/driver_icon.png")}
							style={{ marginRight: 15 }}
						/>
						<View style={{ flexShrink: 1 }}>
							<Text
								style={{
									...styles.bottom_text,
									fontWeight: "700",
									marginBottom: 15,
								}}
							>
								You are driving Emeka Obi from Thursday (February 22nd) to
								Tuesday (March 14th).
							</Text>
							<Text style={styles.bottom_text}>
								Pickup: 22, Osborne Street, Off Thompson Avenue, Ikoyi, Lagos,
								Nigeria
							</Text>
						</View>
					</View>

					<View
						style={{
							width: 300,
							margin: 30,
							marginRight: "auto",
							marginLeft: "auto",
						}}
					>
						<Button title="Get Direction" style={{ marginBottom: 20 }} />
						<Button title="View Instructions" />
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	earning: {
		paddingLeft: 40,
		paddingRight: 40,
		paddingTop: 15,
		paddingBottom: 15,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	earning_text: {
		fontSize: 12,
		color: "white",
		marginBottom: 2,
	},
	earning_text_bg: {
		fontSize: 19,
		fontWeight: "600",
	},
	earning_bottom: {
		backgroundColor: "rgba(50, 47, 175, 0.12)",
		flex: 1,
		height: "100%",
	},
	histories: {
		marginBottom: 10,
	},
	history: {
		flexDirection: "row",
		backgroundColor: "white",
		padding: 15,
		marginBottom: 20,
		shadowColor: "rgba(3, 44, 23, 0.1)",
		shadowOpacity: 0.9,
		shadowRadius: 5,
		borderRadius: 10,
		shadowOffset: {
			height: 5,
			width: 0,
		},
		elevation: 5,
	},
	bottom_flex: {
		width: "85%",
		marginLeft: "auto",
		marginRight: "auto",
		justifyContent: "space-between",
		flexDirection: "row",
		marginTop: 20,
	},
	bottom_text: {
		fontSize: 14,
		color: "#121B74",
	},
	left: {
		flex: 3,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	right: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},
	image: {
		// width: "",
		// resizeMode: "cover",
		marginRight: 9,
		borderRadius: 30,
		width: 60,
		height: 60,
		// borderWidth: 1,
	},
	name: {
		color: "#121B74",
		fontWeight: "700",
		fontSize: 16,
		color: "#29354B",
		marginBottom: 3,
		// borderWidth: 1,
	},
	text_status: {
		fontSize: 13,
		color: "#202020",
	},
	circle: function(color) {
		return {
			height: 8,
			width: 8,
			borderRadius: 4,
			backgroundColor: color,
		};
	},
});

const map_state_to_props = state => ({
	auth: state.auth,
});

export default connect(
	map_state_to_props,
	{ userReg },
)(Home);
