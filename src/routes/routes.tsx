import { type RouteObject } from 'react-router-dom';

import { AuthLayout } from '@/layouts/AuthLayout';
export const routes: RouteObject[] = [
  {
    path: 'auth/',
    element: <AuthLayout />,
    children: [{ path: 'sign-up', element: <div>Sign up</div> }],
  },
];
