import {
    GET_TOASTS,
    CLEAR_TOASTS
} from "../../../constants/redux-constants/main.index";

const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_TOASTS:
            return action.payload;
        case CLEAR_TOASTS:
            return {};
        default:
            return state;
    }
}
