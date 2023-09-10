import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShoppingContainer from "./components/ShoppingContainer";
import ItemDetails from "./components/ItemDetails";
import Welcome_Screen from "./components/Welcome_Screen";
import CheckOut from "./components/CheckOut";
import { total } from "./components/State/Slice/CartSlice.jsx";
import Form_Signup from "./components/Form_signup";
import Form_Login from "./components/Form_Login";

const Layout = () => {
  const isOpenCheckOut = useSelector((state) => state.checkout.isOpen);
  return (
    <div>
      <Navbar />
      {isOpenCheckOut && <CheckOut />}
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  //create our tree of components
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ShoppingContainer />, // parent of our children
      },
      { path: "/ItemDetails/:id", element: <ItemDetails /> },
      { path: "/Form_Signup", element: <Form_Signup /> },
      { path: "/Form_Login", element: <Form_Login /> },
      { path: "/Welcome_Screen", element: <Welcome_Screen /> },
    ],
  },
]);
function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(total());
  }, [cartItems]);
  return (
    <>
      <div className="font-sans">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
