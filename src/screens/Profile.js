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
import Button from "../components/Button";
import { userReg } from "../resources/redux-actions/auth";
import { utilis } from "../styles/core/utilis";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import "../styles/core/utilis";

class Profile extends Component {
    state = {
        firstName: "",
        lastname: "",
        email: "",
        password: "",
        confirm: "",
        date: "2016-05-15",
        loading: false
    };

    handleText(value, name) {
        console.log(value, name);
        // this.setState({
        // 	[name]: value,
        // });
    }

    render() {
        const { auth } = this.props;
        const { loading } = this.state;

        return (
            <ScrollView style={styles.container}>
                <View style={utilis.child_container}>
                    <Text
                        style={{
                            ...utilis.text_header,
                            ...utilis.margin_bottom_sm
                        }}
                    >
                        Hello {auth.user.user.firstName}
                    </Text>
                    <Text
                        style={{
                            ...utilis.text_sm,
                            ...utilis.margin_bottom_lg
                        }}
                    >
                        Let us help you get verified on Driverroo
                    </Text>

                    <View style={{ ...styles.profile_pic, marginBottom: 25 }}>
                        <Image
                            source={require("../assets/images/dp.png")}
                            style={{
                                height: 100,
                                resizeMode: "contain",
                                flex: 1,
                                marginRight: 20
                            }}
                        />

                        <TouchableOpacity
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

                    <View style={form.form_control}>
                        <InputField
                            onChangeText={text => {
                                this.handleText(text, "lastName");
                            }}
                            placeholder='Your primary address?'
                        />
                    </View>

                    <View style={form.form_control}>
                        <InputField
                            onChangeText={text => {
                                this.handleText(text, "lastName");
                            }}
                            placeholder='Your secondary address?'
                        />
                    </View>

                    <View style={form.form_control}>
                        <InputField
                            onChangeText={text => {
                                this.handleText(text, "lastName");
                            }}
                            placeholder='Your tertiary address?'
                        />
                    </View>

                    <View style={form.form_control}>
                        <InputField
                            onChangeText={text => {
                                this.handleText(text, "lastName");
                            }}
                            placeholder='What is your BVN?'
                        />
                    </View>

                    <View style={form.form_control}>
                        <InputField
                            onChangeText={text => {
                                this.handleText(text, "lastName");
                            }}
                            placeholder='Please provide your driver’s license number?'
                        />
                    </View>

                    <TouchableOpacity style={[styles.form_upload]}>
                        <Image
                            source={require("../assets/images/add_icon.png")}
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
                                    props.userReg(
                                        { ...this.state },
                                        props.navigation.navigate
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
            </ScrollView>
        );
    }
}

Profile.navigationOptions = {
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
    { userReg }
)(Profile);
