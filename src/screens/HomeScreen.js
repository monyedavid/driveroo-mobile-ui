import * as React from "react";
import { connect } from "react-redux";
import {
	Image,
	Text,
	TextInput,
	View,
	Animated,
	ScrollView,
	ActivityIndicator,
	Keyboard,
} from "react-native";
import "../styles/landing";
import { utilis, textColor } from "../styles/core/utilis";
import Button from "../components/Button";
import { userMe } from "../resources/redux-actions/auth";
import { KeyboardAvoidingView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import InputField from "../components/InputField";
import { previousUser } from "../utils/on-boardin";


class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null,
	};

	constructor() {
		super();
		this.state = {
			mobile: "",
			email: "",
			loading: false,
			isPhone: true,
		};

		this.imageRef = null;
	}
	
	componentDidMount() {	
	// this.keyboardWillShowSub = Keyboard.addListener(
	// 	"keyboardWillShow",
	// 	this.keyboardWillShow,
	// );
	// this.keyboardWillHideSub = Keyboard.addListener(
	// 	"keyboardWillHide",
	// 	this.keyboardWillHide,
	// );
	}

	handleText(value, name) {
		this.setState({
			[name]: value,
		});
	}

	disableSubmit = () => {
		const { mobile, email, isPhone } = this.state;
		if (isPhone) {
			if (mobile !== "") {
				if (mobile.length === 11) return false;
			}

			return true;
		}

		if (!isPhone) {
			if (email !== "") {
				if (!email.includes("@") || !email.includes(".com")) {
					return true;
				}

				if (email.includes("@")) {
					return false;
				}
			}

			return true;
		}
	};

	handleSubmission = async () => {
		let response;
		this.setState({ loading: true });
		if (this.state.isPhone) {
			// check for existing number || STEP:1
			response = await previousUser({ mobile: this.state.mobile });
			//  if number
			if (response.gotMobile) {
				// move to otp || LOGIN
				this.setState({ loading: false });
				this.props.navigation.navigate("OTP", {
					signup: false,
					userdata: response.user,
					mobile: this.state.mobile,
				});
			}
			// if !number
			if (!response.gotMobile) {
				this.setState({ loading: false });
				this.props.navigation.navigate("OTP", {
					base: "mobile",
					signup: true,
					mobile: this.state.mobile,
				});
			}
		}

		if (!this.state.isPhone) {
			// check for existing email || STEP:1
			response = await previousUser({ email: this.state.email });
			// if email
			if (response.gotMail) {
				// move to password | page
				this.setState({ loading: false });
				this.props.navigation.navigate("PassWord", {
					userdata: response.user,
					email: this.state.email,
				});
			}

			// if !email
			if (!response.gotMail) {
				// move to register page || show mobile option register
				this.setState({ loading: false });
				this.props.navigation.navigate("SignUp", {
					base: "email",
					email: this.state.email,
				});
			}
		}
	};

	componentWillUnmount() {}

	componentDidUpdate(prevProps) {
		const props = this.props;

		// if (Object.keys(prevProps.auth.user).length !== Object.keys(props.auth.user).length) {
		if (props.auth.isAuthenticated) {
			// if (props.auth) {
			// if (props.auth.user) {
			// 	if (props.auth.user.user) {
			// 		console.log(props.auth.user.user);
			// 		if (props.auth.user.user.active)
			// 			props.navigation.navigate("Confirmation");
			// 		if (
			// 			props.auth.isAuthenticated &&
			// 			props.auth.user.user.active &&
			// 			!props.auth.user.user.confirmed
			// 		)
			// 			props.navigation.navigate("Profile");
			// 	}
			// }
		}
		// }
	}

	render() {
		const { loading, isPhone } = this.state;
		return (
			// <View style={[landing.container, { marginTop: -20 }]}>
			<ScrollView
				style={{ backgroundColor: "#fff" }}
				resetScrollToCoords={{ x: 0, y: 0 }}
				contentContainerStyle={landing.container}
				scrollEnabled={true}
				// extraHeight={50}
				// extraScrollHeight={50}
			>
				<View
					style={[landing.image_container]}
					ref={el => (this.imageRef = el)}
				>
					<Image
						source={require("../assets/images/bgImage.png")}
						style={landing.image}
					/>
					{/* <View style={landing.overlay} /> */}
				</View>
				<View style={utilis.child_container}>
					{/* Image */}
					<Image
						source={require("../assets/images/logo.png")}
						style={landing.logo}
					/>
					{/* <View> */}
					<Text style={[utilis.text, textColor("#3E3E3E")]}>
						More than just you
					</Text>
					<Text
						style={{
							...utilis.text,
							marginBottom: 25,
							...utilis.text_bg,
						}}
					>
						Personal Chaffeur
					</Text>

					<View style={utilis.margin_bottom_lg}>
						{isPhone ? (
							<InputField
								onChangeText={text => {
									this.handleText(text, "mobile");
								}}
								placeholder="Enter Phone Number"
								keyboardType="phone-pad"
							/>
						) : (
							<InputField
								keyboardType="email-address"
								onChangeText={text => {
									this.handleText(text, "email");
								}}
								placeholder="Email"
							/>
						)}
					</View>

					<View style={utilis.tab}>
						{!loading ? (
							<Button
								title="Get started"
								disabled={this.disableSubmit()}
								style={{
									marginBottom: 10,
								}}
								onPress={() => {
									this.handleSubmission();
								}}
							/>
						) : (
							<ActivityIndicator
								size="small"
								color="#fff"
								style={{
									marginBottom: 10,
									backgroundColor: "#121B74",
									paddingTop: 15,
									paddingBottom: 15,
									borderRadius: 5,
								}}
							/>
						)}

						{isPhone ? (
							<Button
								onPress={() => {
									this.setState({ isPhone: false });
								}}
								title="Get started with email instead"
								type="clear"
							/>
						) : (
							<Button
								onPress={() => {
									this.setState({ isPhone: true });
								}}
								title="Get started with phone number instead"
								type="clear"
							/>
						)}

						{!isPhone ? (
							<Text
								style={[
									utilis.text,
									utilis.text_sm,
									utilis.text_center,
									utilis.margin_bottom_lg,
									textColor("#8C8C8C"),
									{ marginTop: 10 },
								]}
							>
								Forgot Password
							</Text>
						) : (
							<Text
								style={[
									utilis.text,
									utilis.text_sm,
									utilis.text_center,
									utilis.margin_bottom_lg,
									textColor("#8C8C8C"),
									{ marginTop: 10 },
								]}
							/>
						)}
					</View>

					<View>
						<Text style={[landing.footer, { marginTop: -29 }]}>
							By signing up, you confirm that you agree to our Terms of Use and
							have read and understood our Privacy Policy
						</Text>
						{isPhone ? (
							<Text style={[landing.footer, { marginTop: 10 }]}>
								You will receive an SMS to confirm your phone number
							</Text>
						) : null}
					</View>
				</View>
			</ScrollView>
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
