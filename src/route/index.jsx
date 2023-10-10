import { createBrowserRouter } from "react-router-dom";
import Layout from "~/layout/main/layout";
import Bookmarks from "~/pages/bookmarks";
import NotFound from "~/pages/error";
import Explore from "~/pages/explore";
import Home from "~/pages/home";
import Lists from "~/pages/lists";
import Messages from "~/pages/messages";
import Notification from "~/pages/notifications";
import Profile from "~/pages/profile";



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
                path: ':slag',
                element: <Profile />
            },
            {
                path: '/messages',
                element: <Messages />
            },
            {
                path: '/lists',
                element: <Lists />
            },
            {
                path: '/bookmarks',
                element: <Bookmarks />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    },

])

export default routes;

