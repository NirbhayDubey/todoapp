import React from "react";

export default function Tabs(props) {
  const statusArr = ["all", "pending", "completed"];
  const tabStatusArr = ["", false, true];

  const { tabStatus, setTabStatus, setPageNo } = props;

  const handleStatus = (status) => {
    setPageNo(1);
    switch (status) {
      case statusArr[0]:
        setTabStatus("");
        break;
      case statusArr[1]:
        setTabStatus(false);
        break;
      case statusArr[2]:
        setTabStatus(true);
        break;
    }
  };

  return (
    <div className="my-4 mx-2">
      <div className="flex">
        {statusArr.map((item, index) => {
          return (
            <div
              className={`p-2 px-3 border-gray-300 capitalize cursor-pointer ${
                tabStatus === tabStatusArr[index]
                  ? "border-t border-l border-r rounded-tl rounded-tr bg-[#ffffff]"
                  : "border-b"
              }`}
              onClick={() => handleStatus(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
