import config from "../../configs";
import { Google_Places } from "../../graphql/places.google.com";
const url = config.DRIVER_MS_OCEAN;

export const autoMatic = async (input, token) => {
    const service = new Google_Places(url, token);
    const { data } = await service.autoComplete({ input });

    const { ok, error, success } = data.data.autoComplete;
    // console.log(success.predictions, "oes");

    if (ok) return success.predictions;

    if (!ok) console.log("error toast");
};
