import { createBrowserRouter } from 'react-router';
import HomePage from '../features/landing/pages/HomePage';
import PublicRoutes from './publicRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    Component: PublicRoutes,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
]);

export { router };
