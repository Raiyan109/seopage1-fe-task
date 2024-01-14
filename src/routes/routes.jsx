import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    }
    // {
    //     path: '/modal',
    //     element: <Modal />
    // }
])

export default routes