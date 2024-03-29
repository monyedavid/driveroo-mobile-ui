import React from "react";
import { StyleSheet } from "react-native";

const pre_style = {
    text_sm: {
        fontSize: 14,
        fontWeight: "300"
    },

    text: {
        color: "#000000",
        fontSize: 17,
        fontWeight: "700",
        marginBottom: 5
    }
};

const styles = {
    ...pre_style,
    child_container: {
        maxWidth: "80%",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: 50
    },
    child_container_password: {
        maxWidth: "80%",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: 10
    },
    child_container_lg: {
        maxWidth: "90%",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: 30
    },
    text_bg: {
        fontSize: 25
    },
    text_header: {
        color: "#121B74",
        fontSize: 19,
        fontWeight: "600"
    },
    text_light: {
        ...pre_style.text,
        fontWeight: "400"
    },
    text_sm_gray: {
        ...pre_style.text_sm,
        color: "#878787",
        marginTop: 5
    },
    text_sm_black: {
        ...pre_style.text_sm,
        color: "#000"
    },

    text_sm_blue: {
        ...pre_style.text_sm,
        color: "#002257",
        marginTop: 5
    },
    text_gray: {
        color: "#3E3E3E"
        // fontSize: 17,
        // fontWeight: "400",
    },
    text_center: {
        textAlign: "center"
    },
    flex_horizaontal: {
        flexDirection: "row",
        alignItems: "center"
    },
    margin_bottom_sm: {
        marginBottom: 15
    },
    margin_bottom: {
        marginBottom: 35
    },
    margin_bottom_lg: {
        marginBottom: 50
    },
    next_icon: {
        textAlign: "right",
        color: "#0803A5",
        marginTop: 35,
        fontSize: 45
    }
};

export const utilis = StyleSheet.create(styles);

export const textColor = function(color) {
    return {
        color: color
    };
};
