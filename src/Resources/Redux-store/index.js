import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../Redux-reducers/index";

const initialState = {};

const middleware = [thunk];
// const middleware = {}

// create Store
const store = createStore(
    rootReducer, // all combined reducers
    initialState, // DUHH initaial state at craete store level
    composeWithDevTools(applyMiddleware(...middleware)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
