import { combineReducers } from "redux";
import errors from "./error.reducers";
import auth from "./auth.reducers";
import toast from "./toast.reducers";

export default combineReducers({
    auth,
    errors,
    toast
});
