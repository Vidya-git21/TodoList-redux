import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  list: []
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // ✅ Add a new todo
    addTodo: {
      reducer(state, action) {
        state.list.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false
          }
        };
      }
    },

    // ✅ Toggle completion status
    toggleTodo(state, action) {
      const todo = state.list.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    // ✅ Delete a todo
    deleteTodo(state, action) {
      state.list = state.list.filter(todo => todo.id !== action.payload);
    },

    // ✅ Edit a todo's text
    editTodo(state, action) {
      const { id, newText } = action.payload;
      const todo = state.list.find(todo => todo.id === id);
      if (todo) {
        todo.text = newText;
      }
    }
  }
});

// Export actions
export const { addTodo, toggleTodo, deleteTodo, editTodo } = todosSlice.actions;

// Export reducer
export default todosSlice.reducer;
