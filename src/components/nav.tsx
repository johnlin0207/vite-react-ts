import '../css/nav.scss';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();

  const logout = () => {
    const result = confirm('退出吗');
    if (result) {
      navigate('/login');
    }
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <span onClick={logout}>登出</span>,
    },
  ];

  return (
    <div className="nav">
      <div className="logo">xx管理系统</div>
      <div className="user">
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              你好,xx
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  );
}

export default Nav;
