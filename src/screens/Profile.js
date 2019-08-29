import React, { Component } from "react";
import { connect } from "react-redux";
import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";
import InputField from "../components/InputField";
import { KeyboardAvoidingView } from "react-native";
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
        mothers_maiden_name: "",
        loading: false
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

        if (!result.cancelled) {
            const str = result.uri;
            const to = str.length - 3;
            const ext = str.substring(to, str.length);

            this.setState({
                [`${name}Base64`]: result.base64,
                [`${name}Ext`]: ext,
                [name]: result.uri
            });
        }
    };

    render() {
        const { auth, profileUpdatde } = this.props;
        const { loading } = this.state;

        return (
            <ScrollView style={utilis.child_container}>
                <KeyboardAvoidingView
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        justifyContent: "center"
                    }}
                    behavior='padding'
                    enabled
                    keyboardVerticalOffset={100}
                >
                    <View>
                        <Text
                            style={{
                                ...utilis.text_header,
                                ...utilis.margin_bottom_sm
                            }}
                        >
                            Hello{" "}
                            {/* Hello {auth.user && auth.user.user.firstName} */}
                        </Text>
                        <Text
                            style={{
                                ...utilis.text_sm,
                                ...utilis.margin_bottom_lg
                            }}
                        >
                            Let us help you get verified on Driverroo
                        </Text>

                        <View
                            style={{ ...styles.profile_pic, marginBottom: 25 }}
                        >
                            <Image
                                source={
                                    this.state.avatar
                                        ? { uri: this.state.avatar }
                                        : require("../assets/images/dp.png")
                                }
                                style={
                                    this.state.avatar
                                        ? styles.icon
                                        : {
                                              height: 100,
                                              resizeMode: "contain",
                                              flex: 1,
                                              marginRight: 20
                                          }
                                }
                            />

                            <TouchableOpacity
                                onPress={() => {
                                    this._pickImage("avatar");
                                }}
                                style={
                                    ([styles.form_upload],
                                    {
                                        flex: 2,
                                        borderColor: "#A6AAB4",
                                        borderWidth: 1,
                                        padding: 17,
                                        paddingBottom: 17,
                                        alignItems: "center",
                                        borderRadius: 5,
                                        alignItems: "center"
                                    })
                                }
                            >
                                <Text
                                    style={{
                                        fontSize: 14,
                                        color: "#A6AAB4",
                                        fontWeight: "600"
                                    }}
                                >
                                    Upload a profile picture
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={form.form_flex}>
                            <View style={form.form_left}>
                                <InputField
                                    autoFocus={true}
                                    value={this.state.dob}
                                    onChangeText={text => {
                                        this.handleText(text, "dob");
                                    }}
                                    placeholder='Date of Birth'
                                />
                            </View>

                            <View style={form.form_right}>
                                <InputField
                                    value={this.state.mothers_maiden_name}
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
                                value={this.state.primary_location}
                                onChangeText={text => {
                                    this.handleText(text, "primary_location");
                                }}
                                placeholder='Your primary address?'
                            />
                        </View>

                        <View style={form.form_control}>
                            <InputField
                                value={this.state.secondary_location}
                                onChangeText={text => {
                                    this.handleText(text, "secondary_location");
                                }}
                                placeholder='Your secondary address?'
                            />
                        </View>

                        <View style={form.form_control}>
                            <InputField
                                value={this.state.tertiary_location}
                                onChangeText={text => {
                                    this.handleText(text, "tertiary_location");
                                }}
                                placeholder='Your tertiary address?'
                            />
                        </View>

                        <View style={form.form_control}>
                            <InputField
                                value={this.state.bvn}
                                onChangeText={text => {
                                    this.handleText(text, "bvn");
                                }}
                                placeholder='What is your BVN?'
                            />
                        </View>

                        <View style={form.form_control}>
                            <InputField
                                value={this.state.driverLisenceNumber}
                                onChangeText={text => {
                                    this.handleText(
                                        text,
                                        "driverLisenceNumber"
                                    );
                                }}
                                placeholder='Please provide your driver’s license number?'
                            />
                        </View>

                        <TouchableOpacity
                            onPress={() => {
                                this._pickImage("driversLisence");
                            }}
                            style={[styles.form_upload]}
                        >
                            <Image
                                source={
                                    this.state.driversLisence
                                        ? { uri: this.state.driversLisence }
                                        : require("../assets/images/add_icon.png")
                                }
                                style={styles.icon}
                            />
                            <Text style={{ fontSize: 16, color: "#A6AAB4" }}>
                                Upload Driver’s License
                            </Text>
                        </TouchableOpacity>

                        <View style={form.form_control}>
                            {!loading ? (
                                <Button
                                    title='Continue'
                                    style={{ marginBottom: 10 }}
                                    onPress={() => {
                                        this.setState({ loading: true });
                                        profileUpdatde(
                                            {
                                                ...this.state,
                                                id: auth.user.user.id,
                                                token: auth.user.token
                                            },
                                            this.handleText(),
                                            this.props.navigation.navigate
                                        );
                                    }}
                                />
                            ) : (
                                <ActivityIndicator
                                    size='small'
                                    color='#fff'
                                    style={{
                                        marginBottom: 10,
                                        backgroundColor: "#121B74",
                                        paddingTop: 15,
                                        paddingBottom: 15,
                                        borderRadius: 5
                                    }}
                                />
                            )}
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

Profile.navigationOptions = {
    headers: null
    // headerLeft: "back",
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
        borderStyle: "dashed",
        borderColor: "#D6D9E4",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 40,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 5
    },
    icon: {
        backgroundColor: "#10C971",
        height: 40,
        width: 40,
        justifyContent: "center",
        marginRight: 10,
        borderRadius: 20
        // color: "#10C971",
    },
    profile_pic: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});

const map_state_to_props = state => ({
    auth: state.auth
});

export default connect(
    map_state_to_props,
    { profileUpdatde }
)(Profile);
