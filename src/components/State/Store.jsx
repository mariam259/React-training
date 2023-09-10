import { configureStore } from "@reduxjs/toolkit";
import CheckOutReducer from "./Slice/CheckOutSlice";
import logReducer from "./Slice/index_login";
import CartReducer from "./Slice/CartSlice.jsx";

export const store = configureStore({
  reducer: {
    checkout: CheckOutReducer,
    cart: CartReducer,
    login: logReducer,
  },
});
