import React, { useState } from "react";

export default function Perpage(props) {
  const { perPage, setPerPage, setPageNo } = props;
  const [toggle, setToggle] = useState(false);

  return (
    <div className="border rounded pr-2 bg-[#fff]">
      <select
        name=""
        id=""
        className="bg-[#fff] p-3 px-4 w-24 flex justify-between items-center outline-none"
        onChange={(e) => {
          setPageNo(1);
          setPerPage(e.target.value);
        }}
        value={perPage}
      >
        <option value={5} className="">
          5
        </option>
        <option value={10} className="">
          10
        </option>
        <option value={15} className="">
          15
        </option>
        <option value={20} className="">
          20
        </option>
      </select>
    </div>
  );
}
