import React from 'react';
import ReactDOM from 'react-dom/client';
import StoreContext from '@/contexts/storeContext';
import store from '@/store';
import App from './app';
import './index.css';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </StoreContext.Provider>
  </React.StrictMode>
);
