import { getMessages } from "../static-data";
import _ from "lodash";

export default function messages(state = getMessages(10), action){
    switch(action.type){
        case SEND_MESSAGE:
            const { message, userId } = action.payload;
            const allUserMsgs = state[userId];
            const number = +_.keys(allUserMsgs).pop() + 1;
            return {
                ...state,
                [userId]: {
                    ...allUserMsgs,
                    [number]: {
                        number, 
                        text: message,
                        is_user_msg: true
                    }
                }
            };

        case DELETE_CHAT:
            const messageId = action.payload.number;
            const activeUserId = action.payload.userId;

            return {
                ...state,
                [activeUserId]: _.omit(state[activeUserId], messageId)
            };
        default:
            return state;
    }
    
}