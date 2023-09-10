import { createSlice } from "@reduxjs/toolkit";

//store the state of all changes happen to item in car item

const initialState = {
  cartItems: [], //contain objects from items
  amount: 0,
  total: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.amount++; // increas the number of items in my cart
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id //find if the item is in my cart or not
      );
      cartItem // any non-zero number consider true
        ? (cartItem.amount = cartItem.amount + 1) //if item exist in cart , amount++ (amount of specific item)
        : state.cartItems.push({ ...action.payload, amount: 1 }); // new item in cart , add object of the item and make amount = 1
    },
    increase: (state, action) => {
      state.amount++;
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      state.cartItems[itemIndex].amount += 1; //increase amount of my specific item

      let total = 0;
      total = state.cartItems[itemIndex].amount * state.cartItems.price;
    },
    decrease: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      state.cartItems[itemIndex].amount > 0 &&
        state.cartItems[itemIndex].amount-- &&
        state.amount--; // updating the amount of the state
      let total = 0;
      total = state.cartItems[itemIndex].amount * state.cartItems.price;
    },
    remove: (state, action) => {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );
          state.amount = state.amount - cartItem.amount;
        }
      });
    },
    total: (state) => {
      let total = 0;
      state.cartItems.forEach((cartItem) => {
        total += cartItem.amount * cartItem.price; // total price for my cart
      });
      state.total = total;
    },
    clear: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },
  },
});
export const { add, increase, decrease, remove, total, clear } =
  CartSlice.actions;
export default CartSlice.reducer;
