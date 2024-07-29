import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './reducer.js'
export const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});
