import { configureStore } from "@reduxjs/toolkit";
import paginationSlice from "./slices/paginationSlice";

const store = configureStore({
    reducer: {
     pagination: paginationSlice
    }
});

export default store;