import App from "@/App";
import AdminLayout from "@/components/layouts/AdminLayout";
import About from "@/pages/About";
import AddService from "@/pages/admin/AddService";
import Dashboard from "@/pages/admin/Dashboard";
import ServiceList from "@/pages/admin/ServiceList";
import Home from "@/pages/home";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true, // dashboard is the default page foe admin route
        element: <Navigate to="/admin/dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "add-service",
        element: <AddService />,
      },
      {
        path: "service-list",
        element: <ServiceList />,
      },
    ],
  },
]);

export default router;
