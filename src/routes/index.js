import * as React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { NativeRouter, Route, Switch } from "react-router-native";
import OnBoardScreen from "../screens/OnBoard";
import HomeScreen from "../screens/HomeScreen";
import OtpVerifications from "../screens/OtpVerfications";
import SignUp from "../screens/SignUp";
import SocialLogin from "../screens/SocialLogin";
import Profile from "../screens/Profile";
import VerificationScreen from "../screens/VerificationScreen";
import ConfirmationScreen from "../screens/ConfirmationScreen";
import ResetPassword from "../screens/ResetPassword";
import PassWordScreen from "../screens/PassWord";
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
    {
        // Board: {
        //     screen: OnBoardScreen
        // },
        Home: {
            screen: HomeScreen
        },
        // SignUp: {
        //     screen: SignUp
        // },
        // OTP: {
        //     screen: OtpVerifications
        // },
        PassWord: {
            screen: PassWordScreen
        },
        // SocialLogin: {
        //     screen: SocialLogin
        // },
        Profile: {
            screen: Profile
        },
        Verification: {
            screen: VerificationScreen
        },
        ResetPassword: {
            screen: ResetPassword
        },
        Confirmation: {
            screen: ConfirmationScreen
        }
    },
    {
        // initialRouteName: "Profile",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#fff",
                borderBottomColor: "#f3f3f3",
                borderBottomWidth: 4
            },
            headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 17,
                color: "#002257"
            }
        }
    }
);

export default createAppContainer(AppNavigator);
