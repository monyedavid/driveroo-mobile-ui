import * as React from "react";
import { connect } from "react-redux";
import {
	Image,
	Text,
	TextInput,
	View,
	ScrollView,
	ActivityIndicator,
} from "react-native";
import "../styles/landing";
import "../styles/core/utilis";
import Button from "../components/Button";
import { userMe } from "../resources/redux-actions/auth";
import { KeyboardAvoidingView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null,
	};

	state = {
		mobile: "",
		loading: false,
	};

	componentDidMount() {
		this.props.userMe();
	}

	disableSubmit = () => {
		const { mobile } = this.state;
		if (mobile !== "") {
			if (mobile.length === 11) return false;
			// check if mobile.length has alphabetic characters
		}

		return true;
	};

	handleSubmission = () => {
		if (!this.disableSubmit())
			this.props.navigation.navigate("OTP", {
				no: this.state.mobile,
			});
	};

	componentDidUpdate(prevProps) {
		const props = this.props;

		// if (Object.keys(prevProps.auth.user).length !== Object.keys(props.auth.user).length) {
		if (props.auth.isAuthenticated) {
			// if (props.auth) {
			if (props.auth.user) {
				if (props.auth.user.user) {
					console.log(props.auth.user.user);
					if (props.auth.user.user.active)
						props.navigation.navigate("Confirmation");

					if (
						props.auth.isAuthenticated &&
						props.auth.user.user.active &&
						!props.auth.user.user.confirmed
					)
						props.navigation.navigate("Profile");
				}
			}
		}
		// }
	}

	render() {
		const { loading } = this.state;
		return (
			<KeyboardAwareScrollView
				contentContainerStyle={landing.container}
				// extraScrollHeight={30}
				resetScrollToCoords={{ x: 0, y: 0 }}
			>
				{/* <ScrollView contentContainerStyle={{ flex: 1 }}> */}
				<View style={landing.image_container}>
					<Image
						source={require("../assets/images/landing.jpg")}
						style={landing.image}
					/>
					<View style={landing.overlay} />
				</View>
				<View style={utilis.child_container}>
					{/* <View> */}
					<Text style={{ ...utilis.text, ...utilis.margin_bottom }}>
						Get started with Driverroo
					</Text>
					<View style={landing.country}>
						<Image
							source={require("../assets/images/nigeria.png")}
							style={landing.icon}
						/>
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
					{loading ? (
						<ActivityIndicator size="small" color="#002257" />
					) : (
						<Button
							disabled={this.disableSubmit()}
							title="Continue"
							onPress={this.handleSubmission}
						/>
					)}
					{/* </View> */}
				</View>
				{/* </ScrollView> */}
			</KeyboardAwareScrollView>
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
