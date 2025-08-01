import {
  createBrowserRouter,
} from "react-router-dom";
import MainLaout from "../layout/MainLaout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";

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
            path : "/jobs/:id",
            element: <JobDetails />,
            loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
            path : "/register",
            element: <Register />
        },
        {
            path : "/signin",
            element: <SignIn />
        },
    ]
  },
]);

export default router;