import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.list.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
          },
        };
      },
    },

    toggleTodo(state, action) {
      const todo = state.list.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    deleteTodo(state, action) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },

    editTodo(state, action) {
      const { id, newText } = action.payload;
      const todo = state.list.find((todo) => todo.id === id);
      if (todo) {
        todo.text = newText;
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todosSlice.actions;

export default todosSlice.reducer;
