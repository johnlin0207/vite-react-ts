import { lazy, Suspense } from 'react';
import React, { useEffect } from 'react';
import BaseLayout from '@/views/BaseLayout';
import Login from '@/views/Login';
import { useNavigate } from 'react-router-dom';

const lazyLoad = (src: any) => (
  <Suspense fallback={<>Loading</>}>{React.createElement(lazy(src))}</Suspense>
);

function Redirect({ to }: { to: string }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
}

export default [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: 'datamana',
        element: lazyLoad(() => import('@/views/module1')),
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
    element: <Redirect to="/404" />,
  },
];
