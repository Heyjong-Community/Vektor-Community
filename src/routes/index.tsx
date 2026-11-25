import { createBrowserRouter } from 'react-router';
import HomePage from '../features/landing/pages/HomePage';
import PublicRoutes from './publicRoutes';
import LoginPage from '../features/auth/pages/LoginPage';
import LearningPage from '../features/learning/pages/LearningPage';
import RecruitMember from '@/features/recruit/pages/RecruitMember';

const router = createBrowserRouter([
  {
    path: '/',
    Component: PublicRoutes,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'learning',
        Component: LearningPage,
      },
    ],
  },
  {
    path: '/oprec',
    Component: RecruitMember,
  },
  {
    path: '/login',
    Component: LoginPage,
  },
]);

export { router };
