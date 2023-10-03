import { createBrowserRouter } from "react-router-dom";
import Layout from "~/layout/main/layout";
import NotFound from "~/pages/error";
import Explore from "~/pages/explore";
import Home from "~/pages/home";
import Notification from "~/pages/notifications";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/explore',
                element: <Explore />
            },
            {
                path: '/notifications',
                element: <Notification />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    },

])

export default routes;

