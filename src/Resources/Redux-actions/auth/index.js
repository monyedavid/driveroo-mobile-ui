import { g_Auth } from "../../../graphql/auth.graphql";
import config from "../../../configs";

export const userLogin = ({ emailormobile, password }) => async dispatch => {
    const url =
        process.env.NODE_ENV === "production"
            ? config.AUTH_MS
            : config.AUTH_MS_DEV;
    console.log(url, "| url");
    const service = new g_Auth(config.AUTH_MS_DEV);
    try {
        const result = await service.login({ emailormobile, password });
        console.log(result, "result");
    } catch (error) {
        console.log("err |", error);
    }
};
