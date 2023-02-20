import { lazy, Suspense } from 'react';
import React from 'react';
import BaseLayout from '@/views/BaseLayout';
import Login from '@/views/Login';

const lazyLoad = (src: any) => (
  <Suspense fallback={<>Loading</>}>{React.createElement(lazy(src))}</Suspense>
);

export default [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: lazyLoad(() => import('@/views/menu/welcome')),
      },
      {
        path: 'menu1',
        element: lazyLoad(() => import('@/views/menu/menu1')),
      },
      {
        path: 'menu2',
        element: lazyLoad(() => import('@/views/menu/menu2')),
      },
      {
        path: '*',
        element: <p>未匹配到相应菜单</p>,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/404', element: <p>404</p> },
];
