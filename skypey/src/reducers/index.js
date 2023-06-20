import user from "./user";
import contacts from "./contacts";
import activeUserId from "./activeUserId";
import typing from "./typing";
import messages from "./messages";
import { combineReducers } from "redux";

export default combineReducers({
    user,
    messages,
    typing,
    contacts,
    activeUserId //value returned from reducer function is NOT THE STATE, it is just the value of the key represented in the state object
});