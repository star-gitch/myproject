import { SET_MEETING } from "./action";

const initialState = {
    meetingId: localStorage.getItem("temp_meeting"),
};

const meetingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MEETING:
            if (action.payload.length > 0) {
                localStorage.setItem("temp_meeting", action.payload);
            }
            return {
                meetingId: localStorage.getItem("temp_meeting"),
            };
            break;
        default:
            return state;
    }
};
export default meetingReducer;
