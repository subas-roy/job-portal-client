import {
  createBrowserRouter,
} from "react-router-dom";
import MainLaout from "../layout/MainLaout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLaout />,
    errorElement: <h2>Route not found!</h2>,
    children: [
        {
            path : "/",
            element: <Home />
        }
    ]
  },
]);

export default router;