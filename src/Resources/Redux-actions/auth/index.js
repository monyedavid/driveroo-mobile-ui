import {
    GET_ERRORS,
    CLEAR_ERRORS,
    SET_CURRENT_USER
} from "../../../../constants/redux-constants/main.index";
import { g_Auth } from "../../../graphql/auth.graphql";
import config from "../../../configs";
const url = config.AUTH_MS;
// process.env.NODE_ENV === "production" ? config.AUTH_MS : config.AUTH_MS_DEV;

export const userLogin = ({ emailormobile, password }) => async dispatch => {
    dispatch({ type: CLEAR_ERRORS });
    const service = new g_Auth(url);
    let result;
    try {
        result = await service.login({ emailormobile, password });
        // console.log(result.data.data.login[0], "result");
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
    if (result && result.data)
        if (result.data.data.login[0].path) {
            dispatch({
                type: GET_ERRORS,
                payload: result.data.data.login
            });
        }

    if (result.data.data.login[0].sessionId) dispatch(userMe());
};

export const userMe = () => async dispatch => {
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
            dispatch(set_current_user(result.data.data.me));
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

export const userReg = ({
    email,
    password,
    mobile,
    firstName,
    lastName
}) => async dispatch => {
    dispatch({ type: CLEAR_ERRORS });
    const service = new g_Auth(url);
    let result;
    try {
        result = await service.register({
            email,
            password,
            mobile,
            firstName,
            lastName
        });
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

    console.log(result, "| res data");
};

export const userLogout = () => async dispatch => {
    const service = new g_Auth(url);
    await service.logout();
    dispatch(set_current_user({}));
};

export const profileUpdatde = () => async dispatch => {};

/**
 * Object {
  "__typename": "me_data",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDQwMDYyMzgxYTM1MzUwMGNkODc3ZTMiLCJ1c2VyZnVsbG5hbWUiOiJUZXN0IEJvdCIsIm1vYmlsZSI6IjA5MDcyNzcxMzAiLCJtb2RlbCI6ImRyaXZlciIsImlhdCI6MTU2NTY4NTk3NCwiZXhwIjoxNTY2MjkwNzc0fQ.CJnoDjJ_r5Zop1wpra-WD5MgdoV2D_6mmcOkLNiHOJ0",
  "user": Object {
    "active": true,
    "avatar": null,
    "email": "griffinc317@gmail.com",
    "firstName": "Test",
    "lastName": "Bot",
    "mobile": "0907277130",
  },
} result|me
 */

/**
  * 
  * Object {
  "message": null,
  "model": "driver",
  "path": null,
  "sessionId": "vgFHDHtoP7D2PGmZEI3tjTO1CNhycwEJ",
} result
  */
