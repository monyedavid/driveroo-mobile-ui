import React, { Component } from "react";
import { connect } from "react-redux";
import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { profileUpdatde } from "../resources/redux-actions/auth";
import { utilis } from "../styles/core/utilis";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import "../styles/core/utilis";

class Profile extends Component {
    state = {
        primary_location: "",
        secondary_location: "",
        tertiary_location: "",
        driverLisenceNumber: "",
        avatar: null,
        avatarBase64: null,
        avatarExt: null,
        driversLisenceExt: null,
        driversLisence: null,
        driversLisenceBase64: null,
        bvn: "",
        dob: "",
        mothers_maiden_name: ""
    };

    componentDidMount() {
        this.getPermissionAsync();
    }

    handleText(value, name) {
        this.setState({
            [name]: value
        });
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

    _pickImage = async name => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            base64: true
        });

        const str = result.uri;
        const to = str.length - 3;
        var ext = str.substring(to, str.length);

        if (!result.cancelled) {
            this.setState({
                [`${name}Base64`]: result.base64,
                [`${name}Ext`]: ext,
                [name]: result.uri
            });
        }
    };

    render() {
        const { auth, profileUpdatde } = this.props;

        return (
            <ScrollView style={styles.container}>
                <View style={utilis.child_container}>
                    <Text
                        style={{
                            ...utilis.text_header,
                            ...utilis.margin_bottom_sm
                        }}
                    >
                        Hello {auth.user.user && auth.user.user.firstName}
                    </Text>
                    <Text
                        style={{
                            ...utilis.text_sm,
                            ...utilis.margin_bottom_lg
                        }}
                    >
                        Let us help you get verified on Driverroo
                    </Text>

                    <TouchableOpacity
                        onPress={() => {
                            this._pickImage("avatar");
                        }}
                        style={styles.form_upload}
                    >
                        {this.state.avatar ? (
                            <Image
                                source={{ uri: this.state.avatar }}
                                style={{ width: 30, height: 50 }}
                            />
                        ) : (
                            <React.Fragment>
                                <Image
                                    source={require("../assets/images/add_icon.png")}
                                    style={styles.icon}
                                />
                                <Text
                                    style={{ fontSize: 16, color: "#A6AAB4" }}
                                >
                                    Upload a picture of yourself
                                </Text>
                            </React.Fragment>
                        )}
                    </TouchableOpacity>

                    <View style={form.form_flex}>
                        <View style={form.form_left}>
                            <InputField
                                autoFocus={true}
                                onChangeText={text => {
                                    this.handleText(text, "dob");
                                }}
                                placeholder='Date of Birth'
                            />
                        </View>

                        <View style={form.form_right}>
                            <InputField
                                onChangeText={text => {
                                    this.handleText(
                                        text,
                                        "mothers_maiden_name"
                                    );
                                }}
                                placeholder='Maiden name'
                            />
                        </View>
                    </View>

                    <View style={form.form_control}>
                        <InputField
                            onChangeText={text => {
                                this.handleText(text, "primary_location");
                            }}
                            placeholder='Your primary address?'
                        />
                    </View>

                    <View style={form.form_control}>
                        <InputField
                            onChangeText={text => {
                                this.handleText(text, "secondary_location");
                            }}
                            placeholder='Your secondary address?'
                        />
                    </View>

                    <View style={form.form_control}>
                        <InputField
                            onChangeText={text => {
                                this.handleText(text, "tertiary_location");
                            }}
                            placeholder='Your tertiary address?'
                        />
                    </View>

                    <View style={form.form_control}>
                        <InputField
                            onChangeText={text => {
                                this.handleText(text, "bvn");
                            }}
                            placeholder='What is your BVN?'
                        />
                    </View>

                    <View style={form.form_control}>
                        <InputField
                            onChangeText={text => {
                                this.handleText(text, "driverLisenceNumber");
                            }}
                            placeholder='Please provide your driver’s license number?'
                        />
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            this._pickImage("driversLisence");
                        }}
                        style={styles.form_upload}
                    >
                        {this.state.driversLisence ? (
                            <Image
                                source={{ uri: this.state.driversLisence }}
                                style={{ width: 30, height: 50 }}
                            />
                        ) : (
                            <React.Fragment>
                                <Image
                                    source={require("../assets/images/add_icon.png")}
                                    style={styles.icon}
                                />
                                <Text
                                    style={{ fontSize: 16, color: "#A6AAB4" }}
                                >
                                    Upload Driver’s License
                                </Text>
                            </React.Fragment>
                        )}
                    </TouchableOpacity>

                    <Button
                        onPress={() => {
                            //  console.log(auth, "AUTHENTICATED");
                            profileUpdatde({
                                ...this.state,
                                id: auth.user.user.id,
                                token: auth.user.token
                            });
                        }}
                        title='Continue'
                        type='clear'
                    />
                </View>
            </ScrollView>
        );
    }
}

Profile.navigationOptions = {
    title: "Profile"
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 55
    },
    margin_top: {
        marginTop: 50
    },
    form_upload: {
        flexDirection: "row",
        backgroundColor: "#F9FAFB",
        borderStyle: "dotted",
        borderColor: "#D6D9E4",
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        backgroundColor: "#10C971",
        height: 26,
        width: 26,
        borderRadius: 13,
        justifyContent: "center"
        // color: "#10C971",
    }
});

const map_state_to_props = state => ({
    auth: state.auth
});

export default connect(
    map_state_to_props,
    { profileUpdatde }
)(Profile);
