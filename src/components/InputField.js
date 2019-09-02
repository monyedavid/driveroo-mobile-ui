import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Input(props) {
	const [focus, setFocus] = useState(true);

	return (
		<TextInput
			{...props}
			style={[
				!focus ? inputstyles.field_inactive : inputstyles.field,
				{ ...props.style },
			]}
			placeholderTextColor="#A6AAB4"
			ref={props.inputRef}
			autoCapitalize="none"
			autoComplete="off"
			onBlur={() => {
				setFocus(false);
			}}
			onFocus={() => {
				setFocus(true);
			}}
		/>
	);
}

export function DateInput(props) {
	const [focus, setFocus] = useState(true);
	const calenderIcon = <Icon name="calendar" size={15} color="#121B74" />;

	return (
		<TouchableOpacity
			style={[
				!focus ? inputstyles.field_inactive : inputstyles.field,
				{ ...props.style },
			]}
			onPress={() => {
				props.showDateTimePicker();
			}}
		>
			{calenderIcon}
			<TextInput
				{...props}
				placeholderTextColor="#A6AAB4"
				ref={props.inputRef}
				autoCapitalize="none"
				autoComplete="off"
				onBlur={() => {
					setFocus(false);
				}}
				onFocus={() => {
					setFocus(true);
				}}
			/>
		</TouchableOpacity>
	);
}

export const inputstyles = StyleSheet.create({
	field: {
		// marginBottom: 10,
		paddingTop: 17,
		paddingBottom: 17,
		paddingLeft: 15,
		borderColor: "#121B74",
		fontSize: 14,
		borderWidth: 1,
		borderRadius: 5,
		width: "99%",

		// borderColor: "red",
	},
	field_inactive: {
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 15,
		borderColor: "#A6AAB4",
		fontSize: 14,
		borderWidth: 1,
		borderRadius: 5,
		width: "99%",
	},
	drop_down: {
		marginTop: 17,
		marginBottom: 17,
		marginLeft: 15,
		borderColor: "#121B74",
	},
});
