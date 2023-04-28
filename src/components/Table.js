import React, { useEffect, useState } from "react";
import TableBody from "./TableBody";
import { rawData } from "../utils/constant";
import { AiFillCaretDown } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { currentPageHandle, sortByType, updateData } from "../redux/slices/paginationSlice";

const Table = () => {
  const [active, setActive] = useState({ isIncrement: false, type: "" });
  const dispatch = useDispatch();
  const totalData = useSelector(store => store.pagination);

  useEffect(() => {
    dispatch(updateData(rawData));
  }, []);

  const clickHandler = (type, isIncrement) => {
    setActive({ isIncrement, type });
    dispatch(sortByType({isIncrement, sortByType: type}));
    dispatch(currentPageHandle(1));
  };

  return (
    <div>
      <table className="table w-full rounded-lg">
        <thead className="table-header-group">
          <tr className="table-row border bg-slate-100">
            <th className="table-cell text-left p-4 border">
              <div className="flex justify-between items-center">
                <span>Name</span>
                <span className="cursor-pointer text-gray-400">
                  <AiFillCaretDown
                    className={
                      active?.isIncrement && active?.type === "name"
                        ? "text-gray-800 rotate-180"
                        : "text-gray-400 rotate-180"
                    }
                    onClick={() => clickHandler("name", true)}
                  />{" "}
                  <AiFillCaretDown
                    className={
                      !active?.isIncrement && active?.type === "name"
                        ? "text-gray-800"
                        : "text-gray-400"
                    }
                    onClick={() => clickHandler("name", false)}
                  />
                </span>
              </div>
            </th>
            <th className="table-cell text-left p-4 border">
              <div className="flex justify-between items-center">
                <span>Position</span>
                <span className="cursor-pointer text-gray-400">
                  <AiFillCaretDown
                    className={
                      active?.isIncrement && active?.type === "position"
                        ? "text-gray-800 rotate-180"
                        : "text-gray-400 rotate-180"
                    }
                    onClick={() => clickHandler("position", true)}
                  />{" "}
                  <AiFillCaretDown
                    className={
                      !active?.isIncrement && active?.type === "position"
                        ? "text-gray-800"
                        : "text-gray-400"
                    }
                    onClick={() => clickHandler("position", false)}
                  />
                </span>
              </div>
            </th>
            <th className="table-cell text-left p-4 border">
              <div className="flex justify-between items-center">
                <span>Office</span>
                <span className="cursor-pointer text-gray-400">
                  <AiFillCaretDown
                    className={
                      active?.isIncrement && active?.type === "office"
                        ? "text-gray-800 rotate-180"
                        : "text-gray-400 rotate-180"
                    }
                    onClick={() => clickHandler("office", true)}
                  />{" "}
                  <AiFillCaretDown
                    className={
                      !active?.isIncrement && active?.type === "office"
                        ? "text-gray-800"
                        : "text-gray-400"
                    }
                    onClick={() => clickHandler("office", false)}
                  />
                </span>
              </div>
            </th>
            <th className="table-cell text-left p-4 border">
              <div className="flex justify-between items-center">
                <span>Age</span>
                <span className="cursor-pointer text-gray-400">
                  <AiFillCaretDown
                    className={
                      active?.isIncrement && active?.type === "age"
                        ? "text-gray-800 rotate-180"
                        : "text-gray-400 rotate-180"
                    }
                    onClick={() => clickHandler("age", true)}
                  />{" "}
                  <AiFillCaretDown
                    className={
                      !active?.isIncrement && active?.type === "age"
                        ? "text-gray-800"
                        : "text-gray-400"
                    }
                    onClick={() => clickHandler("age", false)}
                  />
                </span>
              </div>
            </th>
            <th className="table-cell text-left p-4 border">
              <div className="flex justify-between items-center">
                <span>Start Date</span>
                <span className="cursor-pointer text-gray-400">
                  <AiFillCaretDown
                    className={
                      active?.isIncrement && active?.type === "startDate"
                        ? "text-gray-800 rotate-180"
                        : "text-gray-400 rotate-180"
                    }
                    onClick={() => clickHandler("startDate", true)}
                  />{" "}
                  <AiFillCaretDown
                    className={
                      !active?.isIncrement && active?.type === "startDate"
                        ? "text-gray-800"
                        : "text-gray-400"
                    }
                    onClick={() => clickHandler("startDate", false)}
                  />
                </span>
              </div>
            </th>
            <th className="table-cell text-left p-4 border">
              <div className="flex justify-between items-center">
                <span>Salary</span>
                <span className="cursor-pointer text-gray-400">
                  <AiFillCaretDown
                    className={
                      active?.isIncrement && active?.type === "salary"
                        ? "text-gray-800 rotate-180"
                        : "text-gray-400 rotate-180"
                    }
                    onClick={() => clickHandler("salary", true)}
                  />{" "}
                  <AiFillCaretDown
                    className={
                      !active?.isIncrement && active?.type === "salary"
                        ? "text-gray-800"
                        : "text-gray-400"
                    }
                    onClick={() => clickHandler("salary", false)}
                  />
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <TableBody rawData={totalData.currentSlice} />
      </table>
    </div>
  );
};

export default Table;
