import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Contact from "./components/contact/Contact";
import Register from "./components/register/Register";
import MainLayout from "./layout/MainLayout";
import DashboardLayout from './layout/DashboardLayout';
import About from './pages/about/About';

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
        path: "about",
        element: <About />,
      },
    ]
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      {
        path: "about",
        element: <About />,
      },
    ]
  }
]);

export default router;
