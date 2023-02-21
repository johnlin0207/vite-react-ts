import React, { useState, useEffect } from 'react';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

let count = 1;
const items2: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = 'menu' + count++;
      return {
        key: subKey,
        label: `${subKey}`,
      };
    }),
  };
});

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };
  const [path, setPath] = useState(['']);
  const location = useLocation();
  useEffect(() => {
    const pathArr = location.pathname.slice(1).split('/');
    setPath(pathArr);
  }, [location]);

  return (
    <Content style={{ padding: '0 50px' }}>
      <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
        <Sider style={{ background: colorBgContainer }} width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
            items={items2}
            onClick={onClick}
          />
        </Sider>
        <div className="outlet-content">
          <Breadcrumb style={{ margin: '16px 0' }}>
            {path.map((item) => (
              <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <Outlet />
        </div>
      </Layout>
    </Content>
  );
};

export default App;
