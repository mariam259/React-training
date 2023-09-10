import React from "react";
import { HiX } from "react-icons/hi";
import { useDispatch } from "react-redux";

import { increase, decrease, remove } from "./State/Slice/CartSlice.jsx";

export default function CheckOutItems({ carItem }) {
  const dispatch = useDispatch();
  //console.log(carItem);
  const { id, price, amount, name, image } = carItem;
  //console.log(carItem);

  return (
    // show item info(price, amount, name, and the image) in our drawer (CheckOutItems)
    <div
      className="flex justify-between items-center border border-solid border-glass p-4 mb-6"
      key={id}
    >
      <div className="flex items-center gap-4">
        <img src={image} alt="" className="w-20 h-20 object-cover" />
      </div>
      <div className="flex flex-col items-start max-w-[6.8rem]">
        <div>{name}</div>
        <div className="flex items-center gap-4 mt-2">
          <button
            className="w-8 h-8 text-white bg-black rounded-full "
            onClick={() => dispatch(decrease(carItem))}
            // increase amount of our item
          >
            -
          </button>
          <div>{amount}</div>
          <button
            className="w-8 h-8 text-white bg-black rounded-full "
            onClick={() => dispatch(increase(carItem))}
            //decrease the amount of our item
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <HiX
          className="cursor-pointer text-xl"
          onClick={() => dispatch(remove(carItem))}
          //remove our item from the cart
        />
        <div>
          $
          {
            (price * amount).toFixed(2)
            // show the price of our specified item
          }
        </div>
      </div>
    </div>
  );
}
