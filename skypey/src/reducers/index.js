import user from "./user";
import contacts from "./contacts";
import { combineReducers } from "redux";

export default combineReducers({
    user: user,
    contacts: contacts //value returned from reducer function is NOT THE STATE, it is just the value of the key represented in the state object
});