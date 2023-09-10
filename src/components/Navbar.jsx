import React, { useEffect, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { open } from "./State/Slice/CheckOutSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();

  const [scroll, setScroll] = useState(false);
  const { amount } = useSelector((state) => state.cart);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // window.scrollY returns the number of pixels that the document is currently scrolled vertically
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <div
      className={`${
        scroll ? "bg-gray-50 shadow-lg" : ""
      } fixed top-0 left-0 w-full z-20 bg-gray-50`}
    >
      <div className="flex items-center justify-between relative container py-4 px-2 mx-auto">
        <Link
          to="/"
          //to return to ShoppingtItems component
        >
          <div className="font-bold text-2xl">Shopify</div>
        </Link>
        <div className="flex items-center relative ">
          <Link
            to="/Welcome_Screen"
            // to navigate to WelcomeScreen which will navigate us to our login/singup form
          >
            <button className="px-2 py-3 font-semibold text-xl text-black rounded-2xl hover:border-2 hover:text-white hover:bg-black">
              Join Us
            </button>
          </Link>
          <div
            className="relative cursor-pointer"
            onClick={() => dispatch(open())}
            //change state so that we can navigate to CheckoutItems
          >
            <BiShoppingBag className="text-3xl opacity-80" />
            <div className="absolute w-4 h-4 rounded-full z-10 right-[-3px] bottom-[-3px] flex items-center justify-center text-[10px] bg-black text-white">
              {amount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
