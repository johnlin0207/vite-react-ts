import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

const { Header, Footer } = Layout;
const items1: MenuProps['items'] = [
  { key: '/datamana', label: '数据管理' },
  { key: '/authmana', label: '权限管理' },
  { key: '/about', label: '关于' },
];

const App: React.FC = () => {
  const [path, setPath] = useState('');
  const navigate = useNavigate();
  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };
  const selectedKey = items1[0]?.key as string;
  const location = useLocation();
  useEffect(() => {
    const level1obj = location.pathname.match(/\/\w+/);
    const level1path = level1obj ? level1obj[0] : '';
    setPath(level1path);
  }, [location]);

  return (
    <Layout>
      <Header className="header">
        <Link className="logo" to="/datamana"></Link>
        <Menu
          onClick={onClick}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[selectedKey]}
          selectedKeys={[path]}
          items={items1}
        />
      </Header>
      <Outlet />
      <Footer style={{ textAlign: 'center' }}>xxx@2023版权所有</Footer>
    </Layout>
  );
};

export default App;
