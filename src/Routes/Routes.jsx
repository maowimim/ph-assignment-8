import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import Apps from "../Pages/Apps";
import Install from "../Pages/Install";
import AppDetails from "../Pages/AppDetails";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage/>,
        element: <MainLayout />,
        hydrateFallbackElement: <p>Loading...</p>,
        children: [
            {
                index: true,
               Component: Home,

               loader: () => fetch('./appdata.json'),
            },
            {
                path: '/apps',
                element: <Apps/>,
            },
            
             {
                path: '/installation',
                element: <Install/>,
            },
             {
                path: '/app/:id',
                element: <AppDetails/>,
            }
          
          
         
        ],
    },
])

export default router