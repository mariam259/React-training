import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginActions } from "./State/Slice/index_login";

function Form_Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.length == 0 || password.length == 0 || name.length == 0) {
      emailRef.current.style.borderColor = "red";
      passwordRef.current.style.borderColor = "red";
      nameRef.current.style.borderColor = "red";
      setError(true);
    } else {
      dispatch(loginActions.login());
      console.log(email);
      navigate("/");
    }
  };

  return (
    <form>
      <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray ">
        <h1 className="text-5xl font-semibold flex justify-center ">Welcome</h1>
        <p className="font-medium text-lg text-gray-500 mt-5 text-center">
          Please enter your details.
        </p>
        <div className="mt-8">
          <div>
            <label className="font-medium text-lg">Name</label>

            <input
              ref={nameRef}
              type="text"
              name="username"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your email"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            {error ? (
              <label className="font-medium text-lg text-red-600">
                Invalid
              </label>
            ) : (
              ""
            )}
          </div>
          <div>
            <label className="font-medium text-lg">Email</label>

            <input
              ref={emailRef}
              type="text"
              name="username"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {error ? (
              <label className="font-medium text-lg text-red-600">
                Invalid
              </label>
            ) : (
              ""
            )}
          </div>

          <div>
            <label className="font-medium text-lg">Password</label>

            <input
              ref={passwordRef}
              type="password"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {error ? (
              <label className="font-medium text-lg text-red-600">
                Invalid
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button
              onClick={handleSubmit}
              className="bg-gray-600 text-white text-lg font-bold py-3 rounded-xl active:scale-[.98] hover:scale-[1.01] ease-in-out"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form_Signup;
