import {
    GET_ERRORS,
    CLEAR_ERRORS
} from "../../../constants/redux-constants/main.index";

const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload;
        case CLEAR_ERRORS:
            return {};
        default:
            return state;
    }
}
