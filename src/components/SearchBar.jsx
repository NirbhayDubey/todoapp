import React from "react";

export default function SearchBar(props) {
  const { searchQry, setSearchQry } = props;

  return (
    <div>
      <input
        type="text"
        placeholder="search todos.."
        className="p-2 border border-gray-400 outline-none rounded text-lg"
        value={searchQry}
        onChange={(e) => {
          setSearchQry(e.target.value);
        }}
      />
    </div>
  );
}
