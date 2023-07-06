import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";


export const AppRouter = () => {
    return(
        createBrowserRouter([
            {
                path: "/",
                element: <LoginPage />, 
            },
            {
                path: "/calendar",
                element: <LoginPage />, 
            },
        ])
    )
}