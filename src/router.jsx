import { createBrowserRouter } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Todo from './Pages/Todo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/todo',
    element: <Todo />,
  },
]);

export default router;