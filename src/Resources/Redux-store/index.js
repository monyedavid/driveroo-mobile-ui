import { createStore, applyMiddleware, compose } from "redux";
// import { composeWithDevTools } from "redux-devtools-extensiontools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import thunk from "redux-thunk";
import rootReducer from "../redux-reducers/index";

const initialState = {};

const persistConfig = {
    key: "driveroo",
    storage,
    blacklist: ["errors", "toast"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];
// const middleware = {}

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export default { store, persistor };
