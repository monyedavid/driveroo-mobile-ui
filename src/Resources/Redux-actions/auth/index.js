import {
    GET_ERRORS,
    CLEAR_ERRORS,
    SET_CURRENT_USER,
    GET_TOASTS,
    CLEAR_TOASTS
} from "../../../../constants/redux-constants/main.index";
import { g_Auth } from "../../../graphql/auth.graphql";
import config from "../../../configs";
const url = config.AUTH_MS;

export const userLogin = ({ emailormobile, password }) => async dispatch => {
    dispatch({ type: CLEAR_ERRORS });
    try {
        const service = new g_Auth(url);
        const { data } = await service.login({ emailormobile, password });

        console.log(data, "from login requests");

        const {
            path,
            message,
            sessionId,
            incompleteProfile,
            confirmed
        } = data.data.login[0];

        if (path)
            dispatch({
                type: GET_ERRORS,
                payload: [{ path, message }]
            });

        if (sessionId) dispatch(userMe());
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: [
                {
                    path: "network",
                    message: "Please connect your phone to  the internet"
                }
            ]
        });
    }
};

export const userMe = isContinue => async dispatch => {
    const service = new g_Auth(url);
    let result;
    try {
        result = await service.me();
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: [
                {
                    path: "network",
                    message: "Please connect your phone to  the internet"
                }
            ]
        });
    }
    // console.log(result.data.data.me, "result|me");
    if (result && result.data) {
        if (result.data.data.me) {
            if (result.data.data.me.__typename === "Error") {
                dispatch(set_current_user({}));
            } else {
                !isContinue
                    ? dispatch(set_current_user(result.data.data.me))
                    : dispatch({
                          type: SET_CURRENT_USER_CONTINUE,
                          payload: userdata
                      });
            }
        }
    }
};

// Set Logged in User
export const set_current_user = userdata => {
    return {
        type: SET_CURRENT_USER,
        payload: userdata
    };
};

export const userReg = (userdata, navigation) => async dispatch => {
    dispatch({ type: CLEAR_ERRORS });
    dispatch({ type: CLEAR_TOASTS });
    try {
        const service = new g_Auth(url);

        const { data } = await service.register({
            ...userdata
        });

        console.log(data, "DATA");

        const { ok, error, success } = data.data.register;
        // ERROR HANDLING
        if (!ok) {
            return dispatch({
                type: GET_ERRORS,
                payload: error
            });
        }

        // SUCCESS MODE
        if (ok) {
            navigation("Confirmation", {
                email: userdata.email,
                firstName: userdata.firstName
            });
            return dispatch({
                type: GET_TOASTS,
                payload: success
            });
        }
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: [
                {
                    path: "network",
                    message: "Please connect your phone to  the internet"
                }
            ]
        });
    }
};

export const userLogout = () => async dispatch => {
    const service = new g_Auth(url);
    await service.logout();
    dispatch(set_current_user({}));
};

export const profileUpdatde = userData => async dispatch => {
    try {
        const service = new g_Auth(url);
        const { data } = await service.updateProfile({
            ...userData
        });

        const { ok, error } = data.data.firstUpdate;

        // ERROR HANDLING
        if (!ok) {
            return dispatch({
                type: GET_ERRORS,
                payload: error
            });
        }

        // SUCCESS MODE
        if (ok) {
            return dispatch({
                type: GET_TOASTS,
                payload: [
                    {
                        path: "FIRST-UPDATE",
                        message: "succesfully updated profile"
                    }
                ]
            });
        }
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: [
                {
                    path: "network",
                    message: "Please connect your phone to  the internet"
                }
            ]
        });
    }
};
