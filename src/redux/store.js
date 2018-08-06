import { createStore } from 'redux';
import reducer, {initialState} from './reducers';

const storage = sessionStorage.getItem('shoppingCartState');
const persistedState = storage ? JSON.parse(storage) : initialState;

const store = createStore(reducer, persistedState);
store.subscribe(() => {
    sessionStorage.setItem('shoppingCartState', JSON.stringify({shoppingCart : store.getState().shoppingCart}));
});

export default store;