import * as types from "./types";

export const saveEmail = (val) => (dispatch) => {
    return dispatch({
        type: types.SAVE_EMAIL,
        payload: val,
    });
};

export const selData = (val) => (dispatch) => {
    return dispatch({
        type: types.SEL_DATA,
        payload: val,
    });
};
