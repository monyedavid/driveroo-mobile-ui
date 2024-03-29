import { SET_CURRENT_USER } from "../../../constants/redux-constants/main.index";
import isEmpty from "../../utils/is.empty";

const initialState = {
	isAuthenticated: false,
	user: {},
	isContinue: false,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload,
			};
		// default
		default:
			return state;
	}
}
