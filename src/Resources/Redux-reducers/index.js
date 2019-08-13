import { combineReducers } from "redux";
import errors from "./error.reducers";
import auth from "./auth.reducers";

export default combineReducers({
    auth,
    errors
});
