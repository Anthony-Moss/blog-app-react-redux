import {
    combineReducers,
    createStore
} from 'redux';

import posts from './reducers/posts';

const FREQUENCY = 2000;
const LS_KEY = 'bloggy-mc-redux';

// Pass an object to combineReducers.
// This  obje t  should  be "shaped" like your state.
const rootReducer = combineReducers({
    posts
});

// let initialState = {};
// const dataFromLocalStoreage = JSON.parse(localStorage.getItem(LS_KEY));
// if (dataFromLocalStoreage) {
//     initialState = dataFromLocalStoreage;
// }
const initialState = JSON.parse(localStorage.getItem(LS_KEY)) || {};

const store = createStore(rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

    setInterval(() => {
        const state = store.getState();
        localStorage.setItem(LS_KEY, JSON.stringify(state));
    }, FREQUENCY);

export default store;
