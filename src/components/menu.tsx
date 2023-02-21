import React from 'react';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 1', '/menu1'),
    getItem('Option 2', '/menu2'),
    getItem('Option 3', '/menu3'),
    getItem('Option 4', '/menu4'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '/menu5'),
    getItem('Option 6', '/menu6'),
    getItem('Submenu', 'sub3', null, [
      getItem('Option 7', 'menu7'),
      getItem('Option 8', 'menu8'),
    ]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', 'menu9'),
    getItem('Option 10', 'menu10'),
    getItem('Option 11', 'menu11'),
    getItem('Option 12', 'menu12'),
  ]),
];

const App: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onClick: MenuProps['onClick'] = (e) => {
    navigate('/menu' + e.key);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
      selectedKeys={['/menu' + pathname]}
    />
  );
};

export default App;
