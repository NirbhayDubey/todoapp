import React from "react";

export default function Pagination(props) {
  const { pageNo, setPageNo, perPage, size } = props;
  const totalPages = Math.ceil(size / perPage);
  const pageNoArr = [...Array(totalPages + 1).keys()].slice(1);

  return (
    <div className="shadow-sm border flex items-center overflow-hidden rounded-lg">
      {pageNoArr.map((pno, index) => {
        return (
          <span
            className={`py-3 px-3 border hover:bg-[#eeeeee] cursor-pointer ${
              pageNo === pno ? "bg-gray-300" : "bg-[#fff]"
            }`}
            key={index}
            onClick={() => {
              setPageNo(pno);
            }}
          >
            {pno}
          </span>
        );
      })}
    </div>
  );
}
