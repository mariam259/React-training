import React from "react";
import { useSelector } from "react-redux";

import Form_Login from "./Form_Login.jsx";
import Form_Signup from "./Form_signup.jsx";

export default function Welcome_Screen() {
  const isLogged = useSelector((state) => state.login.isLoggedIn);
  console.log(isLogged);

  return (
    <div className="flex w-full h-screen relative">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        {isLogged ? <Form_Login /> : <Form_Signup />}
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-gray-600 to-white rounded-full"></div>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"></div>
      </div>
    </div>
  );
}
