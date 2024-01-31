import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./reducerSlice/countSlice";
import userReducer from "./reducerSlice/userSlice"
import logger from "redux-logger";


export default configureStore({
  reducer: {
    count: countSlice,
    user: userReducer
  },
  middleware: ()=>[logger]
});
