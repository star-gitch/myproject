import * as types from "../types";

export const initialState = {
    currentEmail: "",
};
export const emailReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_EMAIL:
            var newState = { ...state, currentEmail: action.payload };

            return newState;
        default:
            return state;
    }
};
