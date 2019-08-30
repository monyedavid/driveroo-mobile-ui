// import * as React from "react";
import Drawer from "../components/Drawer";
// import OnBoardScreen from "../screens/OnBoard";
import HomeScreen from "../screens/HomeScreen";
import OtpVerifications from "../screens/OtpVerfications";
import SignUp from "../screens/SignUp";
import SocialLogin from "../screens/SocialLogin";
import Profile from "../screens/Profile";
import VerificationScreen from "../screens/VerificationScreen";
import ConfirmationScreen from "../screens/ConfirmationScreen";
import ResetPassword from "../screens/ResetPassword";
import PassWordScreen from "../screens/PassWord";
import Status from "../screens/user/Status";
import Home from "../screens/user/Home";
import {
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator
} from "react-navigation";

const AppNavigator = createStackNavigator(
    {
        // Board: {
        //     screen: OnBoardScreen
        // },
        Landing: {
            screen: HomeScreen
        },
        SignUp: {
            screen: SignUp
        },
        OTP: {
            screen: OtpVerifications
        },
        PassWord: {
            screen: PassWordScreen
        },
        SocialLogin: {
            screen: SocialLogin
        },
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
        },
        Status: {
            screen: Status
        },
        HomePage: {
            screen: Home
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
                fontSize: 18,
                color: "#121B74"
            }
        }
    }
);

const DrawerNavigator = createDrawerNavigator(
    {
        App: {
            screen: AppNavigator
        }
    },
    {
        hideStatusBar: true,
        drawerBackgroundColor: "rgba(255,255,255,.9)",
        // overlayColor: "#6b52ae",
        drawerWidth: 350,
        contentComponent: Drawer,
        contentOptions: {
            activeTintColor: "#fff",
            activeBackgroundColor: "#6b52ae"
        }
    }
);

export default createAppContainer(DrawerNavigator);
