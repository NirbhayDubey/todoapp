import React, { useState } from "react";
import TodoList from "./TodoList";
import InsertTodoToggle from "./InsertTodoToggle";

export default function Board() {
  const [addToggle, setAddToggle] = useState(false);
  const [todoText, setTodoText] = useState("");

  return (
    <div className="rounded-lg shadow-md bg-[#fafafc] p-10 min-h-[700px] mb-32">
      <div className="p-2 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">My Todos</h1>
        <div
          className="border-[2px] border-[#52846680] border-dashed rounded-md flex items-center p-2 pl-4 bg-[#e8f2e4] hover:bg-[#e8f2e490]"
          onClick={() => {
            setAddToggle(true);
          }}
        >
          <span className="text-2xl rounded-full h-7 w-7 flex justify-center items-center text-[#528466] border-[2px] border-[#52846690] mr-3">
            +
          </span>{" "}
          Add new todo
        </div>
      </div>
      <TodoList></TodoList>
      {/* Insert Todo toggle fixed */}
      {addToggle && (
        <InsertTodoToggle {...{ todoText, setTodoText, setAddToggle }} />
      )}
    </div>
  );
}
