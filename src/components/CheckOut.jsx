import React from "react";
import { HiChevronLeft, HiTrash } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";

import { open } from "./State/Slice/CheckOutSlice.jsx";
import { clear } from "./State/Slice/CartSlice.jsx";
import CheckOutItems from "./CheckOutItems.jsx";

export default function CheckOut() {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((state) => state.cart);
  // using CartSlice

  return (
    //drawer of cart items
    <div className="bg-black bg-opacity-50 fixed z-30 top-0 left-0 w-full h-screen">
      <div className="h-full bg-gray-100 sm:w-[40rem] min-w-[15rem] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => dispatch(open())}
            >
              <HiChevronLeft />
              <span className="uppercase text-[0.95rem] select-none">
                Continue Shopping
              </span>
            </div>
            <div>Shopping Bag {amount}</div>
          </div>
          <div className="mt-8">
            {cartItems.length === 0 ? (
              <div className="uppercase text-center text-3xl">
                Your cart is empty
              </div>
            ) : (
              <>
                {cartItems.map((carItem) => {
                  return <CheckOutItems key={carItem.id} carItem={carItem} />;
                })}
                <div className="flex justify-between items-center mt-12">
                  <div>Total Cost: ${total.toFixed(2)}</div>
                  <HiTrash
                    className="cursor-pointer text-3xl"
                    onClick={() => dispatch(clear())}
                  />
                </div>
                <div className="text-center cursor-pointer bg-black text-white p-3 mt-8 rounded-md ">
                  CheckOut
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
