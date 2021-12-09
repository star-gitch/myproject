import * as types from "../types";

export const initialState = {
    currentData: "data",
};
export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEL_DATA:
            return { ...state, currentData: action.payload };
        default:
            return state;
    }
};
