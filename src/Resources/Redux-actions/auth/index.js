import { GET_ERRORS, CLEAR_ERRORS, SET_CURRENT_USER } from "../../../../constants/redux-constants/main.index";
import { g_Auth } from "../../../graphql/auth.graphql";
import config from "../../../configs";
const url = config.AUTH_MS;
const durl = config.DRIVER_MS;
// process.env.NODE_ENV === "production" ? config.AUTH_MS : config.AUTH_MS_DEV;

export const userLogin = ({ emailormobile, password }) => async dispatch => {
	dispatch({ type: CLEAR_ERRORS });
	const service = new g_Auth(url);
	let result;
	try {

		result = await service.login({ emailormobile, password });

		console.log(result);
		// console.log(result.data.data.login[0], "result");
	} catch (error) {
		console.log(error);
		dispatch({
			type: GET_ERRORS,
			payload: [
				{
					path: "network",
					message: "Please connect your phone to  the internet",
				},
			],
		});
	}
	if (result && result.data)
		if (result.data.data.login[0].path) {
			dispatch({
				type: GET_ERRORS,
				payload: result.data.data.login,
			});
		}

	if (result.data.data.login[0].sessionId) dispatch(userMe());
};

export const userMe = isContinue => async dispatch => {
	const service = new g_Auth(url);
	let result;
	try {
		result = await service.me();
	} catch (error) {
		dispatch({
			type: GET_ERRORS,
			payload: [
				{
					path: "network",
					message: "Please connect your phone to  the internet",
				},
			],
		});
	}
	// console.log(result.data.data.me, "result|me");
	if (result && result.data) {
		if (result.data.data.me) {
			if (result.data.data.me.__typename === "Error") {
				dispatch(set_current_user({}));
			} else {
				!isContinue
					? dispatch(set_current_user(result.data.data.me))
					: dispatch({
							type: SET_CURRENT_USER_CONTINUE,
							payload: userdata,
					  });
			}
		}
	}
};

// export const userCheckMe = () => async dispatch => {
// 	const service = new g_Auth(url);
// 	let result;
// 	try {
// 		result = await service.me();
// 	} catch (error) {
// 		dispatch({
// 			type: GET_ERRORS,
// 			payload: [
// 				{
// 					path: "network",
// 					message: "Please connect your phone to  the internet",
// 				},
// 			],
// 		});
// 	}
// 	// console.log(result.data.data.me, "result|me");
// 	if (result && result.data) {
// 		if (result.data.data.me) {
// 			if (result.data.data.me.__typename === "Error") {
// 				dispatch(set_current_user({}));
// 			} else {
// 				dispatch(set_current_user(result.data.data.me));
// 			}
// 		}
// 	}
// };

// Set Logged in User
export const set_current_user = userdata => {
	return {
		type: SET_CURRENT_USER,
		payload: userdata,
	};
};

export const userReg = ({ email, password, mobile, firstName, lastName }) => async dispatch => {
	dispatch({ type: CLEAR_ERRORS });
	const service = new g_Auth(url);
	let result;
	try {
		result = await service.register({
			email,
			password,
			mobile,
			firstName,
			lastName,
		});
	} catch (error) {
		dispatch({
			type: GET_ERRORS,
			payload: [
				{
					path: "network",
					message: "Please connect your phone to  the internet",
				},
			],
		});
	}

	console.log(result, "| res data");
};

export const userLogout = () => async dispatch => {
	const service = new g_Auth(url);
	await service.logout();
	dispatch(set_current_user({}));
};

export const profileUpdatde = ({
	dob,
	mothers_maiden_name,
	bvn,
	primary_location: { address, landmark, city, state },
}) => async dispatch => {};

/**
 * 
 * 
 * dob: "${dob}",
                  dob: "${mothers_maiden_name}",
                  bvn: "${bvn}"
                  primary_location: {
                    address: "${primary_location.address}",
                    landmark: "${primary_location.landmark}",
                    city: "${primary_location.city}",
                    state: "${primary_location.city}"
                  },
                  secondary_location: {
                    address: "${secondary_location.address}",
                    landmark: "${secondary_location.landmark}",
                    city: "${secondary_location.city}",
                    state: "${secondary_location.state}"
                  },
                  tertiary_location: {
                    address: "${tertiary_location.address}",
                    landmark: "${tertiary_location.landmark}",
                    city: "${tertiary_location.city}",
                    state: "${tertiary_location.state}"s

                    // primary_location : { address , landmark , city , state} 
// secondary_location: {
//     address,
//     landmark,
//     city,
//     state
//   } ,  
//   tertiary_location: {
//     address,
//     landmark,
//     city,
//     state,
  }
 
  */
