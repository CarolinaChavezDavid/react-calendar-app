import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { CalendarPage } from "../calendar/pages/CalendarPage";


export const AppRouter = () => {
    return(
        createBrowserRouter([
            {
                path: "/",
                element: <LoginPage />, 
            },
            {
                path: "/calendar",
                element: <CalendarPage />, 
            },
        ])
    )
}