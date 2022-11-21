import { createBrowserRouter } from "react-router-dom"

import App from '../App';
import Login from "../pages/Login/Login";
import NotFound from '../pages/NotFound/NotFound';
import Todo from '../pages/Todo/Todo';

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: '',
                element: <Todo />
            },
            {
                path: 'login/',
                element: <Login />
            }
        ]
    }
]);

export { MainRouter }