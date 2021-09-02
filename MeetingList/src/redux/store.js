import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import meetingReducer from "./reducer";

const devTools = window.devToolsExtension
    ? window.devToolsExtension()
    : (f) => f;

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

const store = createStore(meetingReducer, enhancer);

export default store;
