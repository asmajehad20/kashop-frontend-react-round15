import { createBrowserRouter } from "react-router-dom";

import Contact from "./components/contact/Contact";
import MainLayout from "./layout/MainLayout";
import DashboardLayout from './layout/DashboardLayout';

import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import AuthLayout from "./layout/AuthLayout";
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index:true,
        path: "home",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ]
  },
  {
    path: "/admin",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />,
      }
    ]
  }
]);

export default router;
