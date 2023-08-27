import React from "react";
import Form from "./components/Form";

function App() {
  // const adminUser = {
  //   email: "example@.com",
  //   password: "12442",
  // };
  // const [user, setUser] = useState({ name: "", email: "" });
  // const [error, setError] = useState("");
  // const Login = (e) => {
  //   console.log(e);
  // };
  // const Logout = () => {
  //   console.log("Logout");
  // };
  return (
    // <div>{(user.email != "") ?
    //   <div className="flex w-full h-screen">
    //     <div className="w-full flex items-center justify-center lg:w-1/2">
    //       <Form />
    //     </div>
    //     <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
    //       <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full"></div>
    //       <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"></div>
    //     </div>
    //   </div>} </div>
    //   );
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Form />
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full"></div>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"></div>
      </div>
    </div>
  );
}

export default App;
