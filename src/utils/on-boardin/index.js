import config from "../../configs";
import { g_Auth } from "../../graphql/auth.graphql";
const url = config.AUTH_MS;

export const previousUser = async userdata => {
    try {
        const service = new g_Auth(url);
        const { data } = await service.previousUser({ ...userdata });
        const { error, user, gotMail, gotMobile, ok } = data.data.previousUser;

        if (ok) {
            return { gotMail, gotMobile, user };
        }

        if (!ok) {
            return { error };
        }
    } catch (error) {
        return {
            ok: false,
            error: [
                {
                    path: "network",
                    message: "An error occured while retrieving data"
                }
            ]
        };
    }
};
