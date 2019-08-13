import {
    GET_ERRORS,
    CLEAR_ERRORS
} from "../../../../constants/redux-constants/main.index";
import { g_Auth } from "../../../graphql/auth.graphql";
import config from "../../../configs";

export const userLogin = ({ emailormobile, password }) => async dispatch => {
    dispatch({ type: CLEAR_ERRORS });
    const url =
        process.env.NODE_ENV === "production"
            ? config.AUTH_MS
            : config.AUTH_MS_DEV;

    const service = new g_Auth(config.AUTH_MS_DEV);
    let result;
    try {
        result = await service.login({ emailormobile, password });
        // console.log(result.data.data.login[0], "result");
    } catch (error) {
        console.log("err |", error);
    }
    if (result.data.data.login[0].path) {
        dispatch({
            type: GET_ERRORS,
            payload: result.data.data.login
        });
    }
};

export const userMe = () => async dispatch => {
    const service = new g_Auth(config.AUTH_MS_DEV);
    try {
        const result = await service.me();
        console.log(result.data.data.me, "result|me");
    } catch (error) {
        console.log("err |", error);
    }
};

// Set Logged in User
export const set_current_user = userdata => {
    return {
        type: SET_CURRENT_USER,
        payload: userdata
    };
};

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
