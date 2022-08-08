// import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import todosSlice from '../modules/todosSlice.js';

// const rootReducer = combineReducers({
//   todos,
// });
// const store = createStore(rootReducer);

const store = configureStore({
  reducer: {
    todosSlice,
  },
});

export default store;
