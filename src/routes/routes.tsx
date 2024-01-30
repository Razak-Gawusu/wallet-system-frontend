import { type RouteObject } from 'react-router-dom';

import { AuthLayout, HomeLayout } from '../layouts';
import { Home } from '../pages';

export const routes: RouteObject[] = [
  {
    path: 'auth/',
    element: <AuthLayout />,
    children: [{ path: 'sign-up', element: <div>Sign up</div> }],
  },
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'history/', element: <div>History</div> },
      { path: 'profile/', element: <div>Profile</div> },
    ],
  },
];
