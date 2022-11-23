import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";

const store = configureStore({
  reducer: todosReducer,
});

export default store;
