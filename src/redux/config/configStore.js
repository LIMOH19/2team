// import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import todos from '../modules/todosSlice.js';

// const rootReducer = combineReducers({
//   todos,
// });
// const store = createStore(rootReducer);

const store = configureStore({
  reducer: {
    todos,
  },
});

export default store;
