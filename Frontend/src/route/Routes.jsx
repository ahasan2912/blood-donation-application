import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        Path: "/",
        element: <MainLayout />,
        errorElement: <div>404 Not Found</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

        ]
    },
]);

export default router;