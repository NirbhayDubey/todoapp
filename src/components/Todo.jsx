import React, { useState } from "react";
import { deleteTodo, updateTodo } from "../features/todos/todosSlice";
import { useDispatch } from "react-redux";

export default function Todo(props) {
  const { index } = props;
  const { title, completed } = props.todo;
  const despatch = useDispatch();
  const [upText, setUpText] = useState(title);
  const [updateToggle, setUpdateToggle] = useState(false);

  return (
    <div className="border rounded-lg flex items-center p-2 mb-1 bg-[#ffffff]">
      {/* todo Titile */}
      {updateToggle ? (
        <input
          className="w-1/2 pl-4 border p-1 rounded border-[#00000080]"
          type="text"
          value={upText}
          onChange={(e) => {
            setUpText(e.target.value);
          }}
        />
      ) : (
        <p className="w-1/2 ml-4">{title}</p>
      )}
      <div className="w-1/2 flex items-center justify-end gap-4">
        <div className="text-center">
          <div
            className={`${
              completed ? "bg-green-500" : "bg-red-600"
            } text-center py-2 w-24 rounded text-white`}
          >
            {completed ? "Completed" : "Pending"}
          </div>
        </div>
        <div className="p-1 text-center">
          <button
            className="bg-gray-300 text-center py-1 px-2 rounded "
            onClick={() => {
              if (!updateToggle) setUpdateToggle(true);
              else {
                despatch(
                  updateTodo(
                    Object.assign({}, props.todo, {
                      title: upText,
                    })
                  )
                );
                setUpdateToggle(false);
              }
            }}
          >
            {updateToggle ? "update" : "edit"}
          </button>
        </div>
        <div className="p-1 text-center">
          <button
            className={`${
              completed ? "text-green-500" : "text-red-600"
            } text-center p-1 text-2xl cursor-pointer`}
            onClick={() => {
              despatch(
                updateTodo(
                  Object.assign({}, props.todo, {
                    completed: true,
                  })
                )
              );
            }}
            disabled={completed ? true : false}
          >
            &#x2691;
          </button>
        </div>
        <div className="p-1 text-center">
          <button
            className="text-center p-1 text-xl"
            onClick={() => {
              despatch(deleteTodo(props.todo));
            }}
          >
            {" "}
            &#x2715;{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
