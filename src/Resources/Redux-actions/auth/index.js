import { g_Auth } from "../../../Graphql/auth.graphql";

export const userLogin = ({ emailormobile, password }) => async dispatch => {
    const url =
        process.env.NODE_ENV === "production"
            ? process.env.AUTH_MS
            : process.env.AUTH_MS_DEV;
    const service = new g_Auth();
    try {
        const result = await service.login({ emailormobile, password });
        console.log(result, "result");
    } catch (error) {
        console.log("err |", error);
    }
};
