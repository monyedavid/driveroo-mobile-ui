import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { userReg } from "../resources/redux-actions/auth";
import DatePicker from "react-native-datepicker";
import "../styles/core/utilis";

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
			<View style={styles.container}>
				<View style={utilis.child_container}>
					<Text style={{ ...utilis.text, ...utilis.margin_bottom_lg }}>
						Setup profile
					</Text>
					{/* <InputField
						autoFocus={true}
						name
						onChangeText={text => {
							this.handleText(text, "numorEmail");
						}}
						placeholder=""
					/> */}
					<DatePicker
						style={{ width: 200 }}
						date={this.state.date}
						mode="date"
						placeholder="select date"
						format="YYYY-MM-DD"
						minDate="2016-05-01"
						maxDate="2016-06-01"
						confirmBtnText="Confirm"
						cancelBtnText="Cancel"
						customStyles={{
							dateIcon: {
								position: "absolute",
								left: 0,
								top: 4,
								marginLeft: 0,
							},
							dateInput: {
								marginLeft: 36,
							},
							// ... You can check the source to find the other keys.
						}}
						onDateChange={date => {
							this.setState({ date: date });
						}}
					/>
					<InputField
						onChangeText={text => {
							this.handleText(text, "numorEmail");
						}}
						placeholder="Last name"
					/>
					<InputField
						onChangeText={text => {
							this.handleText(text, "numorEmail");
						}}
						placeholder="Email address"
					/>
					<InputField
						onChangeText={text => {
							this.handleText(text, "numorEmail");
						}}
						placeholder="Password"
						secureTextEntry={true}
					/>
					<InputField
						onChangeText={text => {
							this.handleText(text, "numorEmail");
						}}
						placeholder
						placeholder="Confirm password"
					/>
					<Button
						title={"Continue"}
						style={styles.margin_top}
						onPress={() => {
							console.log("funky");
							// props.navigation.navigate("Verification");
						}}
					/>
				</View>
			</View>
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
});

export default connect(
	null,
	{ userReg },
)(Profile);
