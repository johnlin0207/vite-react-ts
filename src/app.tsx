import routers from '@/router';
import { BrowserRouter, Routes, useRoutes, Router } from 'react-router-dom';

const GetRoutes = () => {
  const routes = useRoutes(routers);
  return routes;
};

export default function App() {
  return (
    <BrowserRouter>
      <GetRoutes />
    </BrowserRouter>
  );
}
