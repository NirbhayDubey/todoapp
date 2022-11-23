import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const initialState = {
  status: "",
  todos: [],
  filteredTodos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    insertTodo(state, action) {
      state.todos.push(action.payload);
    },
    updateTodo(state, action) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id)
          return Object.assign({}, todo, action.payload);
        return todo;
      });
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.filteredTodos = action.payload;
      });
  },
});

export const { insertTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

// creating thunk
export const fetchTodos = createAsyncThunk("todos/fetchtodos", async () => {
  const res = await axios.get("/mochdata.json");
  return res.data;
});

export const filterPage = createSelector(
  (todos) => todos,
  (state, page) => page,
  (allTodos, page) => {
    const no = page.number;
    const perpage = page.perpage;
    const filteredTodos = allTodos.slice((no - 1) * perpage, no * perpage);
    return filteredTodos;
  }
);

export const filterStatus = createSelector(
  (todos) => todos,
  (state, completed) => completed,
  (allTodos, completed) => {
    const filteredTodos =
      completed === ""
        ? allTodos
        : allTodos.filter((todo) => todo.completed == completed);
    return filteredTodos;
  }
);

export const filterSearch = createSelector(
  (todos) => todos,
  (state, searchQry) => searchQry,
  (allTodos, searchQry) => {
    const filteredTodos = allTodos.filter((todo) => {
      return todo.title.toLowerCase().includes(searchQry.toLowerCase());
    });
    return filteredTodos;
  }
);
