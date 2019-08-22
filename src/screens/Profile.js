import React, { Component } from "react";
import { connect } from "react-redux";
import {
	View,
	StyleSheet,
	Text,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { userReg } from "../resources/redux-actions/auth";
import DatePicker from "react-native-datepicker";
import { utilis, textColor } from "../styles/core/utilis";
import "../styles/core/utilis";
import { Icon } from "native-base";

class Profile extends Component {
	state = {
		firstName: "",
		lastname: "",
		email: "",
		password: "",
		confirm: "",
		date: "2016-05-15",
	};

	handleText(value, name) {
		console.log(value, name);
		// this.setState({
		// 	[name]: value,
		// });
	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<View style={utilis.child_container}>
					<Text style={{ ...utilis.text_header, ...utilis.margin_bottom_sm }}>
						Hello Simi
					</Text>
					<Text style={{ ...utilis.text_sm, ...utilis.margin_bottom_lg }}>
						Let us help you get verified on Driverroo
					</Text>

					<View style={form.form_control}>
						<InputField
							onChangeText={text => {
								this.handleText(text, "lastName");
							}}
							placeholder="Your primary address?"
						/>
					</View>

					<View style={form.form_control}>
						<InputField
							onChangeText={text => {
								this.handleText(text, "lastName");
							}}
							placeholder="Your secondary address?"
						/>
					</View>

					<View style={form.form_control}>
						<InputField
							onChangeText={text => {
								this.handleText(text, "lastName");
							}}
							placeholder="Your tertiary address?"
						/>
					</View>

					<View style={form.form_control}>
						<InputField
							onChangeText={text => {
								this.handleText(text, "lastName");
							}}
							placeholder="What is your BVN?"
						/>
					</View>

					<View style={form.form_control}>
						<InputField
							onChangeText={text => {
								this.handleText(text, "lastName");
							}}
							placeholder="Please provide your driver’s license number?"
						/>
					</View>

					<TouchableOpacity style={styles.form_upload}>
						<Image
							source={require("../assets/images/add_icon.png")}
							style={styles.icon}
						/>
						<Text style={{ fontSize: 16, color: "#A6AAB4" }}>
							Upload Driver’s License
						</Text>
					</TouchableOpacity>

					{/* {base === "email" ? (
						<View style={form.form_control}>
							<InputField
								onChangeText={text => {
									this.handleText(text, "mobile");
								}}
								placeholder="Mobile"
							/>
						</View>
					) : (
						<View style={form.form_control}>
							<InputField
								onChangeText={text => {
									this.handleText(text, "email");
								}}
								placeholder="Email"
							/>
						</View>
					)} */}

					{/* <View style={form.form_control}>
                        <InputField
                            onChangeText={text => {
                                this.handleText(text, "confirm");
                            }}
                            placeholder='Confirm Password'
                            secureTextEntry={true}
                        />
                    </View> */}
				</View>
			</ScrollView>
		);
	}
}

Profile.navigationOptions = {
	title: "Profile",
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 55,
	},
	margin_top: {
		marginTop: 50,
	},
	form_upload: {
		flexDirection: "row",
		backgroundColor: "#F9FAFB",
		borderStyle: "dotted",
		borderColor: "#D6D9E4",
		alignItems: "center",
		justifyContent: "center",
	},
	icon: {
		backgroundColor: "#10C971",
		height: 26,
		width: 26,
		borderRadius: 13,
		justifyContent: "center",
		// color: "#10C971",
	},
});

export default connect(
	null,
	{ userReg },
)(Profile);
