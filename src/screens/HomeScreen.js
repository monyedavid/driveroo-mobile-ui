import * as React from "react";
import { connect } from "react-redux";
import { Image, Text, TextInput, View } from "react-native";
import "../styles/landing";
import "../styles/core/utilis";
import Button from "../components/Button";
import { userMe } from "../resources/redux-actions/auth";
import { KeyboardAvoidingView } from "react-native";

class HomeScreen extends React.Component {
	state = {
		mobile: "",
	};

	//     props.navigationOptions = {
	// 	header: null,
	// };

	// React.useEffect(() => {
	//     //props.userMe();
	//     // use data to push to map screen if user exists
	//     // console.log("state|}component mounted |", props.auth);
	//     if (props.auth) {
	//         if (props.auth.user) {
	//             if (props.auth.user.user) {
	//                 if (props.auth.user.user.active)
	//                     props.navigation.navigate("Confirmation");

	//                 if (
	//                     props.auth.isAuthenticated &&
	//                     props.auth.user.user.active &&
	//                     !props.auth.user.user.confirmed
	//                 )
	//                     props.navigation.navigate("Profile");
	//             }
	//         }
	//     }
	// });

	disableSubmit = () => {
		const { mobile } = this.state;
		if (mobile !== "") {
			if (mobile.length === 11) return false;
			// check if mobile.length has alphabetic characters
		}

		return true;
	};

	handleSubmission = () => {
		if (!this.disableSubmit()) this.props.userMe();
	};

	componentDidUpdate() {
		const props = this.props;

		if (props.auth) {
			if (props.auth.user) {
				if (props.auth.user.user) {
					if (props.auth.user.user.active) props.navigation.navigate("Confirmation");

					if (props.auth.isAuthenticated && props.auth.user.user.active && !props.auth.user.user.confirmed)
						props.navigation.navigate("Profile");
				}
			}
		}
	}

	render() {
		return (
			<KeyboardAvoidingView style={landing.container}>
				<View style={landing.image_container}>
					<Image source={require("../assets/images/landing.jpg")} style={landing.image} />
					<View style={landing.overlay} />
				</View>

				<View style={utilis.child_container}>
					{/* <View> */}
					<Text style={{ ...utilis.text, ...utilis.margin_bottom }}>Get started with Driverroo</Text>
					<View style={landing.country}>
						<Image source={require("../assets/images/nigeria.png")} style={landing.icon} />
						{/* <Text style={utilis.text_light}>+234 7054727840</Text> */}
						<TextInput
							autoFocus={true}
							keyboardType="number-pad"
							onChangeText={text => {
								this.setState({ mobile: text });
							}}
							placeholder={"+234"}
						/>
					</View>
					<View>
						<Text
							style={{
								...utilis.text_sm_gray,
								...utilis.text_center,
							}}
						>
							By continuing, I confirm that i have read & agree to the
						</Text>
						<Text
							style={{
								...utilis.text_sm_gray,
								...utilis.text_center,
							}}
						>
							Terms & conditions and Privacy policy
						</Text>
					</View>
					<Button
						// disabled={disableSubmit()}
						title="Continue"
						onPress={this.handleSubmission}
					/>
					{/* </View> */}
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const map_state_to_props = state => ({
	auth: state.auth,
});

export default connect(
	map_state_to_props,
	{ userMe },
)(HomeScreen);
