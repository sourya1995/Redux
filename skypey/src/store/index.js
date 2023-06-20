import { legacy_createStore as createStore } from 'redux';
import { reducer } from '../reducers/contacts';
import { contacts } from '../static-data';
const store = createStore(reducer); //initial state is passed directly, for SSR
export default store;