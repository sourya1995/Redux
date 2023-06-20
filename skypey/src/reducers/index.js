import user from "./user";
import contacts from "./contacts";
import activeUserId from "./activeUserId";
import { combineReducers } from "redux";

export default combineReducers({
    user,
    contacts,
    activeUserId //value returned from reducer function is NOT THE STATE, it is just the value of the key represented in the state object
});