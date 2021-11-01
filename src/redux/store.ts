import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import personReducer from "./personSlice";
import savedReducer from "./savedSlice";

const store = configureStore({
  reducer: {
    person: personReducer,
    saved: savedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
