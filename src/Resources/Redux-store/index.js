import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Redux-reducers/index";

const initialState = {};

const middleware = [thunk];
// const middleware = {}

// create Store
const store = createStore(
    rootReducer, // all combined reducers
    initialState, // DUHH initaial state at craete store level
    compose(applyMiddleware(...middleware))
);

export default store;
