import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Layout, Menu, Avatar, Space, Dropdown, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header, Footer } = Layout;
const items1: MenuProps['items'] = [
  { key: '/datamana', label: '数据管理' },
  { key: '/authmana', label: '权限管理' },
  { key: '/about', label: '关于' },
];

const App: React.FC = () => {
  const [path, setPath] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    navigate('/login');
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const selectedKey = items1[0]?.key as string;
  const location = useLocation();

  // 如果刚进入是/则跳转至/datamana
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/datamana');
    }
  }, []);

  useEffect(() => {
    const level1obj = location.pathname.match(/\/\w+/);
    const level1path = level1obj ? level1obj[0] : '';
    setPath(level1path);
  }, [location]);

  const logout = () => {
    setIsModalOpen(true);
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <span onClick={logout}>登出</span>,
    },
  ];

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
        <div className="user">
          <Dropdown menu={{ items }} placement="bottomRight" arrow>
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </Dropdown>
        </div>
        <Modal
          title="提示"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>确定退出登录吗？</p>
        </Modal>
      </Header>
      <Outlet />
      <Footer style={{ textAlign: 'center' }}>
        Copyright © 2023 xxx有限责任公司 版权所有
      </Footer>
    </Layout>
  );
};

export default App;
