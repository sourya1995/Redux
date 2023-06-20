import { legacy_createStore as createStore } from 'redux';
import { reducer } from '../reducers';
import { contacts } from '../static-data';
const store = createStore(reducer, {contacts});
export default store;