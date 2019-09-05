import React, { Component } from "react";
import { connect } from "react-redux";
import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from "react-native";
import { SearchBar, ListItem } from "react-native-elements";
import InputField, { DateInput } from "../../components/InputField";
import Button from "../../components/Button";
import { profileUpdatde } from "../../resources/redux-actions/auth";
import isEmpty from "../../utils/is.empty";
import { Snackbar } from "react-native-material-ui";
import { snackBarGen } from "../../utils/errors/errorHandler";
import { clearErrors } from "../../resources/redux-actions/shared";
import { utilis } from "../../styles/core/utilis";
import { autoMatic } from "../../utils/google/auto.complete.places";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "react-native-modal-datetime-picker";

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import "../../styles/core/utilis";

class Profile extends Component {
    state = {
        primary_location: "",
        secondary_location: "",
        tertiary_location: "",
        // google plac api
        primary_location_id: "",
        secondary_location_id: "",
        tertiary_location_id: "",
        //
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
        loading: false,
        isDateTimePickerVisible: false,
        // GOOGLE PLACES API
        candidates: null,
        current_Location_select: null,
        // seacrchbar values
        searchbar_value: ""
    };

    componentDidMount() {
        this.getPermissionAsync();
    }

    handleText(value, name) {
        this.setState({
            [name]: value
        });
    }

    setLoadFalse = () => {
        this.setState({ loading: false });
    };

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        this.setState({ dob: date.toISOString().split("T")[0] });
        this.hideDateTimePicker();
    };

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

    _renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    };

    _setPlaceId = id => {
        const { current_Location_select } = this.state;

        this.setState(state => {
            const newstate = { ...state };
            newstate[`${current_Location_select}_id`] = id;
            return newstate;
        });
    };

    render() {
        const { auth, profileUpdatde, errors, clearErrors } = this.props;
        const { loading } = this.state;

        displayTheSnack$ = isEmpty(errors) ? null : snackBarGen(errors);

        return (
            <React.Fragment>
                {displayTheSnack$ &&
                    displayTheSnack$.map(({ message, variant }, i) => (
                        <Snackbar
                            key={i}
                            visible={true}
                            timeout={500}
                            bottomNavigation={true}
                            message={message}
                            onPress={() => {
                                this.setLoadFalse();
                                clearErrors();
                            }}
                            onRequestClose={() => {
                                this.setLoadFalse();
                                clearErrors();
                            }}
                            style={{
                                container: {
                                    backgroundColor:
                                        variant === "error" ? "red" : "green"
                                }
                            }}
                        />
                    ))}
                <ScrollView
                    showsHorizontalScrollIndicato={false}
                    style={{ ...utilis.child_container }}
                    showsVerticalScrollIndicator={false}
                >
                    <View>
                        <React.Fragment>
                            <Text
                                style={{
                                    ...utilis.text_header,
                                    ...utilis.margin_bottom_sm
                                }}
                            >
                                Hello{" "}
                                {/* {auth && auth.user && auth.user.user.firstName} */}
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
                                style={{
                                    ...styles.profile_pic,
                                    marginBottom: 25
                                }}
                            >
                                <Image
                                    source={
                                        this.state.avatar
                                            ? { uri: this.state.avatar }
                                            : require("../../assets/images/dp.png")
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
                                    <DateInput
                                        showDateTimePicker={
                                            this.showDateTimePicker
                                        }
                                        disabled={true}
                                        autoFocus={true}
                                        value={this.state.dob}
                                        placeholder='Date of Birth'
                                        style={{ flexDirection: "row" }}
                                    />
                                    <DateTimePicker
                                        isVisible={
                                            this.state.isDateTimePickerVisible
                                        }
                                        onConfirm={this.handleDatePicked}
                                        onCancel={this.hideDateTimePicker}
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
                                    onChangeText={async text => {
                                        this.handleText(
                                            text,
                                            "primary_location"
                                        );
                                        this.setState({
                                            current_Location_select:
                                                "primary_location"
                                        });
                                        if (
                                            this.state.primary_location.length >
                                            4
                                        )
                                            this.setState({
                                                candidates: await autoMatic(
                                                    this.state.primary_location,
                                                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDZiOTcxOTNhNDI1NzAwMDMwYzQ5MWYiLCJ1c2VyZnVsbG5hbWUiOiJUZXN0IEFkbWluIEJPdCIsIm1vYmlsZSI6IjA5MDcyNzc3MTQxIiwibW9kZWwiOiJkcml2ZXIiLCJpYXQiOjE1Njc2NTM1MTIsImV4cCI6MTU2ODI1ODMxMn0.pc64ITKyLfxM1mNIJfUFMzQRR9xY3NZYDJ-y4SPIoAU"
                                                )
                                            });
                                    }}
                                    placeholder='Your primary address?'
                                />
                            </View>

                            {this.state.candidates &&
                                this.state.current_Location_select ===
                                    "primary_location" && (
                                    <View
                                        style={{ flex: 1 }}
                                        containerStyle={{
                                            borderTopWidth: 0,
                                            borderBottomWidth: 0
                                        }}
                                    >
                                        <FlatList
                                            data={this.state.candidates}
                                            renderItem={({ item }) => (
                                                <ListItem
                                                    title={`${item.description}`}
                                                    onPress={() => {
                                                        this._setPlaceId(
                                                            item.place_id
                                                        );
                                                        this.handleText(
                                                            item.description,
                                                            "primary_location"
                                                        );
                                                        this.setState({
                                                            candidates: null
                                                        });
                                                    }}
                                                />
                                            )}
                                            keyExtractor={item => item.id}
                                            ItemSeparatorComponent={
                                                this._renderSeparator
                                            }
                                        />
                                    </View>
                                )}

                            <View style={form.form_control}>
                                <InputField
                                    value={this.state.secondary_location}
                                    onChangeText={async text => {
                                        this.handleText(
                                            text,
                                            "secondary_location"
                                        );

                                        this.setState({
                                            current_Location_select:
                                                "secondary_location"
                                        });
                                        if (
                                            this.state.secondary_location
                                                .length > 4
                                        )
                                            this.setState({
                                                candidates: await autoMatic(
                                                    this.state
                                                        .secondary_location,
                                                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDZiOTcxOTNhNDI1NzAwMDMwYzQ5MWYiLCJ1c2VyZnVsbG5hbWUiOiJUZXN0IEFkbWluIEJPdCIsIm1vYmlsZSI6IjA5MDcyNzc3MTQxIiwibW9kZWwiOiJkcml2ZXIiLCJpYXQiOjE1Njc2NTM1MTIsImV4cCI6MTU2ODI1ODMxMn0.pc64ITKyLfxM1mNIJfUFMzQRR9xY3NZYDJ-y4SPIoAU"
                                                )
                                            });
                                    }}
                                    placeholder='Your secondary address?'
                                />
                            </View>

                            {this.state.candidates &&
                                this.state.current_Location_select ===
                                    "secondary_location" && (
                                    <View
                                        style={{ flex: 1 }}
                                        containerStyle={{
                                            borderTopWidth: 0,
                                            borderBottomWidth: 0
                                        }}
                                    >
                                        <FlatList
                                            data={this.state.candidates}
                                            renderItem={({ item }) => (
                                                <ListItem
                                                    title={`${item.description}`}
                                                    onPress={() => {
                                                        this._setPlaceId(
                                                            item.place_id
                                                        );
                                                        this.handleText(
                                                            item.description,
                                                            "secondary_location"
                                                        );
                                                        this.setState({
                                                            candidates: null
                                                        });
                                                    }}
                                                />
                                            )}
                                            keyExtractor={item => item.id}
                                            ItemSeparatorComponent={
                                                this._renderSeparator
                                            }
                                        />
                                    </View>
                                )}

                            <View style={form.form_control}>
                                <InputField
                                    value={this.state.tertiary_location}
                                    onChangeText={async text => {
                                        this.handleText(
                                            text,
                                            "tertiary_location"
                                        );

                                        this.setState({
                                            current_Location_select:
                                                "tertiary_location"
                                        });
                                        if (
                                            this.state.tertiary_location
                                                .length > 4
                                        )
                                            this.setState({
                                                candidates: await autoMatic(
                                                    this.state
                                                        .tertiary_location,
                                                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDZiOTcxOTNhNDI1NzAwMDMwYzQ5MWYiLCJ1c2VyZnVsbG5hbWUiOiJUZXN0IEFkbWluIEJPdCIsIm1vYmlsZSI6IjA5MDcyNzc3MTQxIiwibW9kZWwiOiJkcml2ZXIiLCJpYXQiOjE1Njc2NTM1MTIsImV4cCI6MTU2ODI1ODMxMn0.pc64ITKyLfxM1mNIJfUFMzQRR9xY3NZYDJ-y4SPIoAU"
                                                )
                                            });
                                    }}
                                    placeholder='Your tertiary address?'
                                />
                            </View>

                            {this.state.candidates &&
                                this.state.current_Location_select ===
                                    "tertiary_location" && (
                                    <View
                                        style={{ flex: 1 }}
                                        containerStyle={{
                                            borderTopWidth: 0,
                                            borderBottomWidth: 0
                                        }}
                                    >
                                        <FlatList
                                            data={this.state.candidates}
                                            renderItem={({ item }) => (
                                                <ListItem
                                                    title={`${item.description}`}
                                                    onPress={() => {
                                                        this._setPlaceId(
                                                            item.place_id
                                                        );
                                                        this.handleText(
                                                            item.description,
                                                            "tertiary_location"
                                                        );
                                                        this.setState({
                                                            candidates: null
                                                        });
                                                    }}
                                                />
                                            )}
                                            keyExtractor={item => item.id}
                                            ItemSeparatorComponent={
                                                this._renderSeparator
                                            }
                                        />
                                    </View>
                                )}

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
                                            ? {
                                                  uri: this.state.driversLisence
                                              }
                                            : require("../../assets/images/add_icon.png")
                                    }
                                    style={styles.icon}
                                />
                                <Text
                                    style={{
                                        fontSize: 16,
                                        color: "#A6AAB4"
                                    }}
                                >
                                    Upload Driver’s License
                                </Text>
                            </TouchableOpacity>

                            <View
                                style={{
                                    ...form.form_control,
                                    marginBottom: 100
                                }}
                            >
                                {!loading ? (
                                    <Button
                                        title='Continue'
                                        style={{ marginBottom: 10 }}
                                        onPress={() => {
                                            this.setState({
                                                loading: true
                                            });
                                            profileUpdatde(
                                                {
                                                    ...this.state,
                                                    id: auth.user.user.id,
                                                    token: auth.user.token
                                                },
                                                this.props.navigation.navigate,
                                                this.setLoadFalse
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
                        </React.Fragment>
                    </View>
                </ScrollView>
            </React.Fragment>
        );
    }
}

Profile.navigationOptions = {
    headers: null,
    drawerLockMode: "locked-closed"
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

const map_state_to_props = ({ auth, errors }) => ({
    auth,
    errors
});

export default connect(
    map_state_to_props,
    { profileUpdatde, clearErrors }
)(Profile);
