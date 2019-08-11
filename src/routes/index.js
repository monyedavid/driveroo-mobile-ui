import * as React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { NativeRouter, Route, Switch } from "react-router-native";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SocialLogin from "../screens/SocialLogin";
import Profile from "../screens/Profile";
import VerificationScreen from "../screens/VerificationScreen";
import ResetPassword from "../screens/ResetPassword";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { RegisterConnector } from "../modules/register/RegisterConnector";

const AppNavigator = createStackNavigator(
	{
		// Home: {
		// 	screen: HomeScreen,
		// },
		// SocialLogin: {
		// 	screen: SocialLogin,
		// },
		// Login: {
		// 	screen: LoginScreen,
		// },
		// Profile: {
		// 	screen: Profile,
		// },
		// Verification: {
		// 	screen: VerificationScreen,
		// },
		ResetPassword: {
			screen: ResetPassword,
		},
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: "#fff",
			},
			headerTitleStyle: {
				fontWeight: "bold",
				fontSize: 17,
				color: "#002257",
			},
		},
	},
);

export default createAppContainer(AppNavigator);
