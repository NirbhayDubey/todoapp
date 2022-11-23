import React, { useState } from "react";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import {
  insertTodo,
  filterPage,
  filterStatus,
  filterSearch,
} from "../features/todos/todosSlice";
import Pagination from "./Pagination";
import Perpage from "./Perpage";
import Tabs from "./Tabs";
import SearchBar from "./SearchBar";
import InsertTodoToggle from "./InsertTodoToggle";

export default function TodoList() {
  const [pageNo, setPageNo] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [tabStatus, setTabStatus] = useState("");
  const [searchQry, setSearchQry] = useState("");

  const todos = useSelector((state) => state.todos);
  const filteredSearchTodos = useSelector(() => filterSearch(todos, searchQry));
  const filteredStatusTodos = useSelector(() =>
    filterStatus(filteredSearchTodos, tabStatus)
  );
  const filteredTodos = useSelector(() =>
    filterPage(filteredStatusTodos, {
      number: pageNo,
      perpage: perPage,
    })
  );

  return (
    <div className="container">
      {/* Tabs and Search bar */}
      <div className="flex justify-between items-center">
        <Tabs {...{ tabStatus, setTabStatus, setPageNo }} />
        <SearchBar {...{ searchQry, setSearchQry }} />
      </div>
      {/* Todo list */}
      <div className="my-4">
        <hr className="my-4" />
        {/* todos list */}
        {filteredTodos?.map((todo, index) => {
          return <Todo todo={todo} index={index} key={index} />;
        })}
      </div>
      {/* Pagination and Perpage section */}
      <div className="flex justify-between mt-5 ml-4">
        <Perpage {...{ perPage, setPerPage, setPageNo }} />
        <Pagination
          {...{
            pageNo,
            perPage,
            size: filteredStatusTodos.length,
            setPageNo,
          }}
        />
      </div>
    </div>
  );
}
