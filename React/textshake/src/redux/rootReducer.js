import { combineReducers } from "redux";
import { emailReducer } from "./reducers/emailReducer";
import { dataReducer } from "./reducers/dataReducer";

const rootReducer = combineReducers({
    email: emailReducer,
    data: dataReducer,
});

export default rootReducer;
