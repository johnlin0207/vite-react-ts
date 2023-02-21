import React, { useState, useEffect } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
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
