import React from "react";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";

const PaginationContainer = () => {
  const data = useSelector((store) => store.pagination);
  return (
    <div className="mt-8 mb-12 flex justify-between">
      <div>
        <span>Showing</span> &nbsp;
        <span>
          {data?.pageStart || "0"} to {data?.pageEnd || "0"} of {data?.totalData.length}{" "}
          entries
        </span>
      </div>
      <Pagination />
    </div>
  );
};

export default PaginationContainer;
