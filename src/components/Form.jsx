import React, { useRef, useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.length == 0 || password.length == 0) {
      emailRef.current.style.borderColor = "red";
      passwordRef.current.style.borderColor = "red";

      setError(true);
    } else {
      console.log(email);
    }
  };

  // async function handleEmail() {}
  return (
    <form>
      <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray">
        <h1 className="text-5xl font-semibold">Welcome Back</h1>
        <p className="font-medium text-lg text-gray-500 mt-4">
          Welcome back! Please enter your details.
        </p>
        <div className="mt-8">
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
                // handleSubmit;
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
                // handleSubmit;
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

          {/* <div className="mt-8 flex justify-between items-center">
            <button className="font-medium text-base text-violet-500">
              Forgot password
            </button>
          </div> */}
          <div className="mt-8 flex flex-col gap-y-4">
            <button
              onClick={handleSubmit}
              className="bg-violet-500 text-white text-lg font-bold py-3 rounded-xl active:scale-[.98] hover:scale-[1.01] ease-in-out"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
