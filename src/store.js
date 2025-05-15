import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './assets/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer
  }
});