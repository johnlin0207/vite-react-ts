import React, { useState, useEffect } from 'react';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content style={{ padding: '0 50px' }}>
      <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
        <p>about what</p>
      </Layout>
    </Content>
  );
};

export default App;
