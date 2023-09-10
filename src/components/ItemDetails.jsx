import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "./State/Slice/CartSlice.jsx";
import { items } from "../CarItems";

export default function ItemDetails() {
  const { id } = useParams(); //this id is passed from ShoppingItems
  const dispatch = useDispatch();

  const item = items.find((item) => item.id === parseInt(id)); //retrun the item with the same first number in the id
  const { name, price, image } = item;
  //show more details (image, price, and more text info about the item) about our clicked item
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="lg:flex items-center justify-center">
        <img
          src={image}
          alt=""
          className="lg:w-[35rem] md:w-[30rem] w-[25rem]"
        />
        <div>
          <div className="text-3xl text-center font-extrabold mb-4">{name}</div>
          <div className="mb-4">${price}</div>
          <p className="max-w-[400px] mb-4">
            Product descriptions are one of the key tools that brands can use to
            maximise both their conversions and visibility on Amazon.
            Descriptions can't include any company information promotional
            language or URLs. Instead it's all about the product.
          </p>
          <button
            className="bg-black text-white p-3 rounded-lg"
            onClick={() => dispatch(add(item))}
            // use function from CartSlice reducer to add the item in cart
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
