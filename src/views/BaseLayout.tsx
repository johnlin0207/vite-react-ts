import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import Menu from '../components/menu';
import Nav from '../components/nav';
import { Outlet } from 'react-router-dom';
import '@/css/app.scss';

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="main">
        <Menu />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
