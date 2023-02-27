import routers from '@/router';
import { BrowserRouter } from 'react-router-dom';
import '@/css/app.scss';
import Router from '@/router';

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
