import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text, Image } from "react-native";
import Button from "../../components/Button";
import { userReg } from "../../resources/redux-actions/auth";
import { utilis } from "../../styles/core/utilis";
import "../../styles/core/utilis";
import { Icon } from "native-base";

class Profile extends Component {
<<<<<<< HEAD
	state = {
		firstName: "",
		lastname: "",
		email: "",
		password: "",
		confirm: "",
		date: "2016-05-15",
		loading: false,
	};

	static navigationOptions = ({ navigation }) => {
		return {
			headerLeft: (
				<View>
					<TouchableOpacity transparent onPress={() => navigation.openDrawer()}>
						<Icon
							name="menu"
							style={{ color: "#121B74", fontSize: 24, marginLeft: 20 }}
						/>
					</TouchableOpacity>
				</View>
			),
			headerTitle: "Account Status",
		};
	};
	// openDrawer = () => {
	// 	this.props.navigation.openDrawer();
	// };
	render() {
		const { auth } = this.props;
		const { loading } = this.state;

		return (
			<View style={styles.container}>
				<Text
					style={[utilis.text_sm, utilis.margin_bottom_lg, utilis.text_center]}
				>
					In progress
				</Text>

				<View style={styles.bars}>
					<View style={styles.status}>
						<View style={styles.left}>
							<Image
								source={require("../../assets/images/id-card.png")}
								style={styles.image}
							/>
							<Text style={styles.text_title}>Identification</Text>
						</View>

						<View style={styles.right}>
							<View style={styles.circle("green")}></View>
							<Text style={styles.text_status}>In progress</Text>
						</View>
					</View>

					<View style={styles.status}>
						<View style={styles.left}>
							<Image
								source={require("../../assets/images/Vector.png")}
								style={styles.image}
							/>
							<Text style={styles.text_title}>English Language</Text>
						</View>

						<View style={styles.right}>
							<View style={styles.circle("green")}></View>
							<Text style={styles.text_status}>In progress</Text>
						</View>
					</View>

					<View style={styles.status}>
						<View style={styles.left}>
							<Image
								source={require("../../assets/images/speak.png")}
								style={styles.image}
							/>
							<Text style={styles.text_title}>Communication Text</Text>
						</View>

						<View style={styles.right}>
							<View style={styles.circle("red")}></View>
							<Text style={styles.text_status}>In progress</Text>
						</View>
					</View>

					<View style={styles.status}>
						<View style={styles.left}>
							<Image
								source={require("../../assets/images/steering-wheel.png")}
								style={styles.image}
							/>
							<Text style={styles.text_title}>Driving Ability Test</Text>
						</View>

						<View style={styles.right}>
							<View style={styles.circle("yellow")}></View>
							<Text style={styles.text_status}>In progress</Text>
						</View>
					</View>

					<View style={styles.status}>
						<View style={styles.left}>
							<Image
								source={require("../../assets/images/verify-me.png")}
								style={styles.image}
							/>
							<Text style={styles.text_title}>Verifyme Check</Text>
						</View>

						<View style={styles.right}>
							<View style={styles.circle("red")}></View>
							<Text style={styles.text_status}>In progress</Text>
						</View>
					</View>

					<View style={styles.status}>
						<View style={styles.left}>
							<Image
								source={require("../../assets/images/onboard.png")}
								style={styles.image}
							/>
							<Text style={styles.text_title}>Onboarding Seminar</Text>
						</View>

						<View style={styles.right}>
							<View style={styles.circle("yellow")}></View>
							<Text style={styles.text_status}>In progress</Text>
						</View>
					</View>
				</View>
				<View style={utilis.child_container}>
					<Button
						onPress={() => {
							console.log("hello");
						}}
						title="Continue"
					/>
				</View>
			</View>
		);
	}
}

=======
    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={[
                        utilis.text_sm,
                        utilis.margin_bottom_lg,
                        utilis.text_center
                    ]}
                >
                    Account Status
                </Text>

                <View style={styles.bars}>
                    <View style={styles.status}>
                        <View style={styles.left}>
                            <Image
                                source={require("../../assets/images/id-card.png")}
                                style={styles.image}
                            />
                            <Text style={styles.text_title}>
                                Identification
                            </Text>
                        </View>

                        <View style={styles.right}>
                            <View style={styles.circle("yellow")}></View>
                            <Text style={styles.text_status}>In progress</Text>
                        </View>
                    </View>

                    <View style={styles.status}>
                        <View style={styles.left}>
                            <Image
                                source={require("../../assets/images/Vector.png")}
                                style={styles.image}
                            />
                            <Text style={styles.text_title}>
                                English Language
                            </Text>
                        </View>

                        <View style={styles.right}>
                            <View style={styles.circle("red")}></View>
                            <Text style={styles.text_status}>pending</Text>
                        </View>
                    </View>

                    <View style={styles.status}>
                        <View style={styles.left}>
                            <Image
                                source={require("../../assets/images/speak.png")}
                                style={styles.image}
                            />
                            <Text style={styles.text_title}>
                                Communication Text
                            </Text>
                        </View>

                        <View style={styles.right}>
                            <View style={styles.circle("red")}></View>
                            <Text style={styles.text_status}>pending</Text>
                        </View>
                    </View>

                    <View style={styles.status}>
                        <View style={styles.left}>
                            <Image
                                source={require("../../assets/images/steering-wheel.png")}
                                style={styles.image}
                            />
                            <Text style={styles.text_title}>
                                Driving Ability Test
                            </Text>
                        </View>

                        <View style={styles.right}>
                            <View style={styles.circle("red")}></View>
                            <Text style={styles.text_status}>pending</Text>
                        </View>
                    </View>

                    <View style={styles.status}>
                        <View style={styles.left}>
                            <Image
                                source={require("../../assets/images/verify-me.png")}
                                style={styles.image}
                            />
                            <Text style={styles.text_title}>
                                Verifyme Check
                            </Text>
                        </View>

                        <View style={styles.right}>
                            <View style={styles.circle("red")}></View>
                            <Text style={styles.text_status}>pending</Text>
                        </View>
                    </View>

                    <View style={styles.status}>
                        <View style={styles.left}>
                            <Image
                                source={require("../../assets/images/onboard.png")}
                                style={styles.image}
                            />
                            <Text style={styles.text_title}>
                                Onboarding Seminar
                            </Text>
                        </View>

                        <View style={styles.right}>
                            <View style={styles.circle("red")}></View>
                            <Text style={styles.text_status}>pending</Text>
                        </View>
                    </View>
                </View>
                <View style={utilis.child_container}>
                    <Button disabled={true} title='pending...' />
                </View>
            </View>
        );
    }
}

Profile.navigationOptions = {
    headers: null
};

>>>>>>> 948df44d16f2e5848c2c62484d6bb6a1b1a112fe
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    bars: {
        marginBottom: 10
    },
    status: {
        flexDirection: "row",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#121B74",
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        marginBottom: 15
    },
    left: {
        flex: 2,
        flexDirection: "row",
        // borderWidth: 1,
        borderColor: "red",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    right: {
        flex: 1,
        flexDirection: "row",
        // borderWidth: 1,
        alignItems: "center",
        justifyContent: "space-around"
    },
    image: {
        // width: "",
        // resizeMode: "cover",
        marginRight: 9
        // borderWidth: 1,
    },
    text_title: {
        color: "#121B74",
        fontWeight: "700",
        fontSize: 14
        // borderWidth: 1,
    },
    text_status: {
        fontSize: 13,
        color: "#202020"
    },
    circle: function(color) {
        return {
            height: 8,
            width: 8,
            borderRadius: 4,
            backgroundColor: color
        };
    }
});

const map_state_to_props = state => ({
    auth: state.auth
});

export default connect(
    map_state_to_props,
    { userReg }
)(Profile);
