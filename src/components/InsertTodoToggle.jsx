import React from "react";
import { useDispatch } from "react-redux";
import { insertTodo } from "../features/todos/todosSlice";

export default function InsertTodoToggle(props) {
  const dispatch = useDispatch();
  const { todoText, setTodoText, setAddToggle } = props;
  return (
    <div className="fixed bg-[#00000080] inset-0 z-10 flex justify-center items-center">
      <div className="bg-[#ffffff] min-w-[500px] border relative flex flex-col justify-center items-center gap-4 p-4 rounded">
        <div
          className="absolute top-[-10px] right-[-10px] h-8 w-8 flex justify-center items-center border rounded-full bg-[#eee] cursor-pointer"
          onClick={() => {
            setTodoText("");
            setAddToggle(false);
          }}
        >
          &#x2715;
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="3"
          value={todoText}
          className="border rounded border-gray-300 outline-none p-2 w-full mt-5 text-lg"
          onChange={(e) => {
            setTodoText(e.target.value);
          }}
        ></textarea>
        <button
          className="border p-2 bg-green-600 text-white rounded"
          onClick={(e) => {
            dispatch(
              insertTodo({
                id: (Math.random() + 1).toString(36).substring(7),
                title: todoText,
                completed: false,
              })
            );
            setTodoText("");
            setAddToggle(false);
          }}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}
