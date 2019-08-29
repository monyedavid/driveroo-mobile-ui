import React from "react";
import { StyleSheet } from "react-native";

export default landing = StyleSheet.create({
    container: {
        marginTop: -50
    },
    image_container: {
        alignItems: "flex-end",
        height: 300
    },
    image: {
        width: "82%",
        height: 300,
        resizeMode: "cover",
        overflow: "hidden"
    },
    logo: {
        marginBottom: 50,
        marginTop: -30
    },
    form: {
        borderBottomColor: "#C8C8C8",
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    country: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15
    },
    footer: {
        fontSize: 11,
        color: "#666666",
        opacity: 0.7,
        textAlign: "center"
    }
});
