import { createSlice } from '@reduxjs/toolkit';

export const sliceTodos = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodos: (state, { payload }) => {
      state.todos = [...state.todos, payload];
    },
    deleteTodos: (state, { payload }) => {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },
  },
});

export default sliceTodos.reducer;

export const { addTodos, deleteTodos } = sliceTodos.actions;

export const selectTodos = state => state.todos;
