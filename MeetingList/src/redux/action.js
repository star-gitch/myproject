export const SET_MEETING = "SET_MEETING";

export const setMeeting = (val) => (dispatch) => {
    return dispatch({
        type: SET_MEETING,
        payload: val,
    });
};
