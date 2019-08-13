import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Text, View, StyleSheet } from "react-native";
import { Icon } from "react-native-material-ui";
import green from "@material-ui/core/colors/green";
import amber from "@material-ui/core/colors/amber";
import IconButton from "@material-ui/core/IconButton";
// BASIC REACT
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
// REACT NATIVE

import { withStyles } from "@material-ui/core/styles";

const variantIcon = {
    success: (
        <View>
            <Icon name='person' />
        </View>
    ),
    warning: (
        <View>
            <Icon name='person' />
        </View>
    ),
    error: (
        <View>
            <Icon name='person' />
        </View>
    ),
    info: (
        <View>
            <Icon name='person' />
        </View>
    )
};

const Wrapper = props => {
    const { classes, className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby='client-snackbar'
            message={
                <Text id='client-snackbar' className={classes.message}>
                    {/* <Icon className={clsx(classes.icon, classes.iconVariant)} /> */}
                    {message}
                </Text>
            }
            action={[
                <IconButton
                    key='close'
                    aria-label='Close'
                    color='inherit'
                    onClick={onClose}
                >
                    <View>
                        <Icon name='person' />
                    </View>
                </IconButton>
            ]}
            {...other}
        />
    );
};

// ATTRIBUTING STYLES TO SNACK BAR
const MySnackbarContentWrapper = withStyles(theme => {
    return StyleSheet.create({
        success: {
            backgroundColor: green[600]
        },
        error: {
            backgroundColor: theme.palette.error.dark
        },
        info: {
            backgroundColor: theme.palette.primary.dark
        },
        warning: {
            backgroundColor: amber[700]
        },
        icon: {
            fontSize: 20
        },
        iconVariant: {
            opacity: 0.9,
            marginRight: theme.spacing.unit
        },
        message: {
            display: "flex",
            alignItems: "center"
        }
    });
})(Wrapper);

//  STYLING SNACK BAR COMNTENT WRAPPERS

// SNACK BAR PROPTYPES
MySnackbarContentWrapper.propTypes = {
    className: PropTypes.string,
    message: PropTypes.node,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(["success", "warning", "error", "info"]).isRequired
};

const CustomizedSnackbars = ({
    verticalAnchor,
    horizontalAnchor,
    variant, // success, error , warning, info
    message,
    open,
    snackbarClose
}) => {
    const snackbarOptions = {
        success: (
            <MySnackbarContentWrapper
                onClose={snackbarClose}
                variant='success'
                message={message}
            />
        ),
        warning: (
            <MySnackbarContentWrapper
                onClose={snackbarClose}
                variant='warning'
                message={message}
            />
        ),
        error: (
            <MySnackbarContentWrapper
                onClose={snackbarClose}
                variant='error'
                message={message}
            />
        ),
        info: (
            <MySnackbarContentWrapper
                onClose={snackbarClose}
                variant='info'
                message={message}
            />
        )
    };

    return (
        <React.Fragment>
            <Snackbar
                anchorOrigin={{
                    vertical: verticalAnchor,
                    horizontal: horizontalAnchor
                }}
                open={open}
                autoHideDuration={10000}
                onClose={snackbarClose}
            >
                {/* DISPLAY SNACKBAR VARIANT HERE */}
                {snackbarOptions[variant]}
            </Snackbar>
        </React.Fragment>
    );
};

CustomizedSnackbars.defaultProps = {
    verticalAnchor: "top", // top, bottom
    horizontalAnchor: "center" // left center right
};

CustomizedSnackbars.propTypes = {
    variant: PropTypes.string, // success, error , warning, info
    message: PropTypes.string,
    open: PropTypes.bool,
    snackbarClose: PropTypes.func,
    verticalAnchor: PropTypes.string,
    horizontalAnchor: PropTypes.string
};

export default CustomizedSnackbars;
