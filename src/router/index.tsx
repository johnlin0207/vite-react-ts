import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from '@/views/App';
import Login from '@/views/Login';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
