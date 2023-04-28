import { createSlice, current } from "@reduxjs/toolkit";
import { searchByInput, sortListByType } from "../../utils/helper";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    totalData: [],
    currentData: [],
    currentSlice: [],
    pageLimit: 10,
    currentPage: 0,
    prevPage: 0,
    nextPage: 0,
    pageStart: 0,
    pageEnd: 0,
    sortType: "",
    isIncrement: false,
    searchInput: "",
    totalPage: 0,
  },
  reducers: {
    updatePageLimit: (state, action) => {
      state.pageLimit = action.payload.entries;
      state.searchInput = action.payload.search;
      //debugger;
      let currentData = current(state.currentData);
      
      if (state.searchInput?.trim()) {
        state.currentData = searchByInput(
          state.searchInput,
          current(state.currentData)
        );
      }
      
      if (+state.pageLimit > 0) {
        if (currentData?.length > 0) {
          let len = currentData?.length;
          let totalPage = Math.floor(len / state.pageLimit);
          if (len % state.pageLimit > 0) totalPage = totalPage + 1;
          state.totalPage = totalPage;
          state.currentPage = 1;
          if (totalPage > 1) state.nextPage = 2;
          state.pageStart = 1;
          state.pageEnd = state.pageLimit;
          state.currentSlice = currentData.filter(
            (item, i) => i + 1 >= state.pageStart && i + 1 <= state.pageEnd
          );
        }
      }
    },

    emptySearch: (state) => {
      state.currentData = sortListByType(
        state.isIncrement,
        state.sortType,
        current(state.totalData)
      );
    
    },

    updateData: (state, action) => {
      state.totalData = action.payload;
      state.currentData = action.payload;
      let len = state.totalData?.length;
      let totalPage = Math.floor(len / state.pageLimit);
      if (len % state.pageLimit > 0) totalPage = totalPage + 1;
      state.totalPage = totalPage;
      state.currentPage = 1;
      if (totalPage > 1) state.nextPage = 2;
      state.pageStart = 1;
      state.pageEnd = state.pageLimit;
      state.currentSlice = state.currentData.filter(
        (item, i) => i + 1 >= state.pageStart && i + 1 <= state.pageEnd
      );
    },

    sortByType: (state, action) => {
      state.sortType = action.payload.sortByType;
      state.isIncrement = action.payload.isIncrement;
      state.currentData = sortListByType(
        state.isIncrement,
        state.sortType,
        current(state.currentData)
      );
    },

    currentPageHandle: (state, action) => {
      let currentData = current(state.currentData);
      state.pageEnd = (+state.pageLimit * +action.payload) > currentData?.length ? currentData.length : (+state.pageLimit * +action.payload);
      state.pageStart = state.pageEnd - (+state.pageLimit) + 1;
      state.currentSlice = currentData.filter((item, i) => i+1 >= state.pageStart && i+1 <= state.pageEnd);
      state.currentPage = action.payload;
      state.prevPage = action.payload - 1;
      state.nextPage = action.payload + 1;
    },

    reset: (state) => {
        let d = current(state.totalData);
        state.currentData = d;
        let len = d?.length;
        let totalPage = Math.floor(len / state.pageLimit);
        if (len % state.pageLimit > 0) totalPage = totalPage + 1;
        state.totalPage = totalPage;
        state.currentPage = 1;
        if (totalPage > 1) state.nextPage = 2;
        state.pageStart = 1;
        state.pageEnd = state.pageLimit;
        state.currentSlice = d.filter(
          (item, i) => i + 1 >= state.pageStart && i + 1 <= state.pageEnd
        );
    }
  },
});

export const { updateData, updatePageLimit, sortByType, emptySearch, currentPageHandle, reset} =
  paginationSlice.actions;
export default paginationSlice.reducer;
