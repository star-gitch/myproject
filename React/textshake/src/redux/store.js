import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import rootReducer from "./rootReducer";

const enhancer = composeWithDevTools(applyMiddleware(ReduxThunk));
export const store = () => {
    const store = createStore(rootReducer, enhancer);
    return store;
};
export default store;
