// Set Logged in User
import {
    CLEAR_ERRORS,
    CLEAR_TOASTS
} from "../../../../constants/redux-constants/main.index";

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};

export const clearToasts = () => {
    return {
        type: CLEAR_TOASTS
    };
};
