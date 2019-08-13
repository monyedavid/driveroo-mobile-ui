import { combineReducers } from "redux";
import errorReducers from "./error.reducers";

export default combineReducers({
    errors: errorReducers
});
