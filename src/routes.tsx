import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";

const Routes = createBrowserRouter([
    {
        path: '/', element: <Dashboard />
    }
])

export default Routes