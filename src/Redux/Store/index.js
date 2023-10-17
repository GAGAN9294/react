import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "Redux/Slices/Users";

export const store = configureStore({
  reducer: {
    users: UserSlice,
    },
} , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
