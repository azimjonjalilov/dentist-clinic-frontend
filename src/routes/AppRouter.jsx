import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/mainLayout/MainLayout";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";
import Blogs from "../pages/blogs/Blogs";
import Price from "../pages/price/Price";
import NotFound from "../pages/notFound/NotFound";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "services",
            element: <Services/>
        },
        {
            path: "blog",
            element: <Blogs />
        },
        {
            path: "price",
            element: <Price />
        }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router;
