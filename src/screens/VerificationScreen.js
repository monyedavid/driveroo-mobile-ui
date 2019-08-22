import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import "../styles/core/utilis";
import "../styles/verification";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Button from "../components/Button";

export default class VerificationScreen extends React.Component {
    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(
                Permissions.CAMERA_ROLL
            );
            if (status !== "granted") {
                alert(
                    "Sorry, we need camera roll permissions to make this work!"
                );
            }
        }
    };

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            base64: true
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={utilis.child_container}>
                    <View style={verification.container}>
                        <Text
                            style={{
                                ...utilis.text_gray,
                                ...utilis.margin_bottom_sm
                            }}
                        >
                            Primary address
                        </Text>
                        <Text style={utilis.text_sm_black}>
                            The place you live most of the time
                        </Text>
                    </View>

                    <View
                        style={{
                            ...verification.container,
                            ...styles.padding_top
                        }}
                    >
                        <Text
                            style={{
                                ...utilis.text_gray,
                                ...utilis.margin_bottom_sm
                            }}
                        >
                            Secondary address
                        </Text>
                        <Text style={utilis.text_sm_black}>
                            The place where you sometimes live or sleep{" "}
                        </Text>
                    </View>

                    <View
                        style={{
                            ...verification.container,
                            ...styles.padding_top
                        }}
                    >
                        <Text
                            style={{
                                ...utilis.text_gray,
                                ...utilis.margin_bottom_sm
                            }}
                        >
                            Tertiary address
                        </Text>
                        <Text style={utilis.text_sm_black}>
                            Another place where you sometimes are
                        </Text>
                    </View>

                    <View
                        style={{
                            ...verification.container,
                            ...styles.padding_top
                        }}
                    >
                        <Text
                            style={{
                                ...utilis.text_gray,
                                ...utilis.margin_bottom_sm
                            }}
                        >
                            BVN Number
                        </Text>
                        <Text style={utilis.text_sm_black}>
                            Your bank verification code
                        </Text>
                    </View>

                    <View
                        style={{
                            ...verification.container,
                            ...styles.padding_top
                        }}
                    >
                        <Text
                            style={{
                                ...utilis.text_gray,
                                ...utilis.margin_bottom_sm
                            }}
                        >
                            Drivers license number
                        </Text>
                        <Text style={utilis.text_sm_black}>
                            Your drivers licence number
                        </Text>
                    </View>
                    <View
                        style={{
                            ...verification.container_no_border,
                            ...styles.padding_top
                        }}
                    >
                        <Text
                            style={{
                                ...utilis.text_gray,
                                ...utilis.margin_bottom_sm
                            }}
                        >
                            Upload image of Drivers licence
                        </Text>
                        <Text style={utilis.text_sm_black}>
                            Please upload a clear image of your drivers license
                        </Text>
                    </View>

                    <Button
                        title={"next"}
                        style={styles.margin_top}
                        onPress={() => {
                            this._pickImage();
                        }}
                    />
                </View>
                {/* <Text>Resend Code in 02:59</Text> */}
            </View>
        );
    }
}

VerificationScreen.navigationOptions = {
    headerTitle: "Step 1 of 4: Identification"
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    padding_top: {
        paddingTop: 25
    },
    margin_top: {
        marginTop: 40
    }
});
