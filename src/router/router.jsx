import {
  createBrowserRouter,
} from "react-router-dom";
import MainLaout from "../layout/MainLaout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLaout />,
    errorElement: <h2>Route not found!</h2>,
    children: [
        {
            path : "/",
            element: <Home />
        },
        {
            path : "/register",
            element: <Register />
        },
    ]
  },
]);

export default router;