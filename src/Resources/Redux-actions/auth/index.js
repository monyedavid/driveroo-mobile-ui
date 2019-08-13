import { g_Auth } from "../../../graphql/auth.graphql";
import config from "../../../configs";

export const userLogin = ({ emailormobile, password }) => async dispatch => {
    const url =
        process.env.NODE_ENV === "production"
            ? config.AUTH_MS
            : config.AUTH_MS_DEV;

    const service = new g_Auth(config.AUTH_MS_DEV);
    let result;
    try {
        result = await service.login({ emailormobile, password });
        console.log(result.data.data.login[0], "result");
    } catch (error) {
        console.log("err |", error);
    }
    if (!result.data.data.login[0].path) {
        console.log("Invalid Email address");
    }
};

export const userMe = () => async dispatch => {
    const service = new g_Auth(config.AUTH_MS_DEV);
    try {
        const result = await service.me();
        console.log(result.data, "result|me");
    } catch (error) {
        console.log("err |", error);
    }
};
