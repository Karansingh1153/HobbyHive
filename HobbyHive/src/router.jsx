import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import SignUp from "../views/Signup";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signUp",
        element: <SignUp />,
    },
    // {
    //     path: "/",
    //     element: <DefaultLayout />,
    //     children: [
    //         {
    //             path: "/dashboard",
    //             element: <Navigate to="/" />,
    //         },
    //         {
    //             path: "/",
    //             element: <Dashboard />,
    //         },
    //         {
    //             path: "/surveys",
    //             element: <Surveys />,
    //         },
    //         {
    //             path: "/surveys/create",
    //             element: <SurveyView />,
    //         },
    //     ],
    // },
    // {
    //     path: "/",
    //     element: <GuestLayout />,
    //     children: [
    //         {
    //             path: "login",
    //             element: <Login />,
    //         },
    //         {
    //             path: "signup",
    //             element: <Signup />,
    //         },
    //     ],
    // },
]);

export default Router;
