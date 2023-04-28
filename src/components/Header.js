import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  emptySearch,
  updatePageLimit,
  currentPageHandle,
  reset,
} from "../redux/slices/paginationSlice";

const Header = () => {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(10);
  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log({ search, entries });
    dispatch(updatePageLimit({ search, entries }));
    //dispatch(currentPageHandle(1));
  };

  const onInputChange = (e) => {
    if (+e.target.value >= 1) {
      setEntries(e.target.value);
      dispatch(updatePageLimit({ search, entries }));
    }
  };

  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value?.trim() === "") {
      dispatch(emptySearch());
      dispatch(reset());
    }
  };

  return (
    <form onSubmit={formSubmitHandler} className="flex justify-between mb-6">
      <div>
        <span className="text-lg font-medium mr-2">Show</span>
        <input
          value={entries}
          onChange={(e) => onInputChange(e)}
          className="w-20 border border-gray-600 rounded-md p-1"
          type="number"
        />
        <span className="text-lg font-medium ml-2">Entries</span>
      </div>
      <div className="flex items-center">
        <input
          value={search}
          onChange={(e) => searchChangeHandler(e)}
          className="border w-[100%] border-gray-600 rounded-l-md p-1"
          type="search"
          placeholder="Type here..."
        />
        <button
          type="submit"
          className="font-medium rounded-r-md p-1 px-4 border border-gray-600"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Header;
