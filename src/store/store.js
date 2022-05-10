import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { landingSummaryReducer } from "./../Landing/duck";

const store = configureStore({
  reducer: combineReducers({
    landing: landingSummaryReducer,
  }),
  middleware: [thunk],
});
console.log("storee", store, store.getState(), typeof landingSummaryReducer);

export default store;
