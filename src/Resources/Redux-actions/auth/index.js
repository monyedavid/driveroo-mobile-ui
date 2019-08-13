import { g_Auth } from "../../../graphql/auth.graphql";
import config from "../../../configs";

export const userLogin = ({ emailormobile, password }) => async dispatch => {
    const url =
        process.env.NODE_ENV === "production"
            ? config.AUTH_MS
            : config.AUTH_MS_DEV;

    const service = new g_Auth(config.AUTH_MS_DEV);
    try {
        const result = await service.login({ emailormobile, password });
        console.log(result.data, "result");
    } catch (error) {
        console.log("err |", error);
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
