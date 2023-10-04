import { createBrowserRouter } from "react-router-dom";
import Layout from "~/layout/main/layout";
import NotFound from "~/pages/error";
import Explore from "~/pages/explore";
import Home from "~/pages/home";
import Messages from "~/pages/messages";
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
                path: '/messages',
                element: <Messages />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    },

])

export default routes;

