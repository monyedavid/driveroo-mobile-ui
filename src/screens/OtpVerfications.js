import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import moment from "moment-timer";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "../styles/core/utilis";
import Timer from "../components/Timer";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { utilis, textColor } from "../styles/core/utilis";

export default function OtpVerification(props) {
	const signup = props.navigation.getParam("signup", "");
	const base = props.navigation.getParam("base", "");
	const userdata = props.navigation.getParam("userdata", "");
	const mobile = props.navigation.getParam("mobile", "");

	React.useEffect(() => {
		console.log(signup, "signup", base, "base", mobile, "mobile", "FROM OTP");
	}, []);

	const [code, setCode] = React.useState("");
	const [loading, setLoading] = React.useState(false);

	// <ActivityIndicator
	// 							size="small"
	// 							color="#fff"
	// 							style={{
	// 								marginBottom: 10,
	// 								backgroundColor: "#121B74",
	// 								paddingTop: 15,
	// 								paddingBottom: 15,
	// 								borderRadius: 5,
	// 							}}
	// 						/>

	const disableButton = () => {
		if (code === "" || code.length !== 4) return true;

		return false;
	};

	return (
		<KeyboardAwareScrollView
			resetScrollToCoords={{ x: 0, y: 0 }}
			contentContainerStyle={styles.container}
			scrollEnabled={true}
			// extraHeight={50}
			// extraScrollHeight={50}
		>
			<View style={utilis.child_container}>
				<View style={styles.top}>
					<Text
						style={{
							...utilis.text_header,
							...utilis.margin_bottom_sm,
						}}
					>
						We sent you a 4-digit code
					</Text>
					<Text
						style={{
							...utilis.text_sm,
							...utilis.margin_bottom_sm,
						}}
					>
						Enter the 4-digit code we sent to
					</Text>
					<Text style={styles.number}>
						+234-
						{mobile ? mobile.substring(1, mobile.length) : "somenumbers"}
					</Text>
				</View>

				<InputField
					onChangeText={text => {
						setCode(text);
					}}
					placeholder="Enter Code"
					style={{ marginBottom: 50 }}
				/>

				<Button
					title="Continue"
					disabled={disableButton()}
					onPress={() => {
						// handle otp || no otp provider yet
						if (signup) {
							console.log("push to signup | page");
							props.navigation.navigate("SignUp", {
								mobile,
								base,
							});
						}

						if (!signup) {
							// move to password | page
							props.navigation.navigate("PassWord", {
								mobile,
								userdata,
							});
						}
					}}
					style={{ marginBottom: 10 }}
				/>
				<Button
					onPress={() => {
						props.navigation.navigate("Home", {
							fromOtp: true,
						});
					}}
					title="Get started with email instead"
					type="clear"
				/>

				<Text style={styles.footer}>
					By signing up, you confirm that you agree to our Terms of Use and have
					read and understood our Privacy Policy
				</Text>
			</View>
		</KeyboardAwareScrollView>
	);
}

OtpVerification.navigationOptions = {
	headers: null,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 55,
	},
	flex: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	input_width: {
		width: 50,
		borderColor: "red",
		textAlign: "center",
	},
	number: {
		fontWeight: "600",
		color: "#000",
		fontSize: 16,
		// margin_ottom: 5,
	},
	top: {
		marginBottom: 60,
		height: "40%",
	},
	footer: {
		fontSize: 11,
		color: "#666666",
		opacity: 0.7,
		textAlign: "center",
		marginTop: 50,
	},
});
