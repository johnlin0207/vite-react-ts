import { useState } from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Modal } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import '@/css/nav.scss';

function Nav() {
  const navigate = useNavigate();

  const logout = () => {
    navigate('/login');
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    logout();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <span onClick={showModal}>登出</span>,
    },
  ];

  return (
    <div className="nav">
      <Link to={'/'}>
        <div className="logo">xx管理系统</div>
      </Link>
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
      <Modal
        title="提示"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>是否登出？</p>
      </Modal>
    </div>
  );
}

export default Nav;
