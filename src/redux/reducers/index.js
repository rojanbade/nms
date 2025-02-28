import { combineReducers } from "@reduxjs/toolkit";
import counter from "./counter";
import posts from "./posts";

export default combineReducers({
  posts: posts,
  counter: counter,
});
