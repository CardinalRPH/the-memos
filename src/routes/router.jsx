import { Navigate, createBrowserRouter } from 'react-router-dom';
import RootLayout from '../pages/RootLayout';
import ActiveFragment from '../pages/Active';
import ArchiveFragment from '../pages/Archive';
import PageNotFound from '../pages/404';

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to={'/active'} replace />
    },
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: 'active',
                element: <ActiveFragment />
            },
            {
                path: 'archive',
                element: <ArchiveFragment />
            }
        ]
    },
    {
        path: '*',
        element:<PageNotFound/>

    }
])

export default AppRouter;