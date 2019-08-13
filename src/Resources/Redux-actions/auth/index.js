import { g_Auth } from "../../../Graphql/auth.graphql";

export const userLogin = ({ emailormobile, password }) => async dispatch => {
    const service = new g_Auth();
    try {
        await service.login({ emailormobile, password });
    } catch (error) {
        console.log("err |", error);
    }
};
