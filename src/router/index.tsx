import React, { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import BaseLayout from '@/views/Layout';
import Login from '@/views/login';
import Datamana from '@/views/module1';

const lazyLoad = (src: any) => (
  <Suspense fallback={<></>}>{React.createElement(lazy(src))}</Suspense>
);

const routerList = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: 'datamana',
        element: <Datamana />,
        children: [
          {
            path: '',
            element: lazyLoad(() => import('@/views/module1/welcome')),
          },
          {
            path: 'menu1',
            element: lazyLoad(() => import('@/views/module1/menu1')),
          },
          {
            path: 'menu2',
            element: lazyLoad(() => import('@/views/module1/menu2')),
          },
          {
            path: '*',
            element: <p>未匹配到相应菜单</p>,
          },
        ],
      },
      {
        path: '/authmana',
        element: lazyLoad(() => import('@/views/module2')),
      },
      {
        path: '/about',
        element: lazyLoad(() => import('@/views/module3')),
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/404', element: <p>404</p> },
  {
    path: '*',
    element: <Navigate to="/404" />,
  },
];

const GenRoutes = () => {
  const routes = useRoutes(routerList);
  return routes;
};

export default GenRoutes;
