import { EDIT_CHAT, SET_TYPING_VALUE } from "../constants/action-types";

export default function typing(state="", action){
    switch(action.type){
        case SET_TYPING_VALUE:
            return action.payload;
        case SEND_MESSAGE:
            return "";
        case EDIT_CHAT:
            return action.payload.text;
        default:
            return state;
    }
}