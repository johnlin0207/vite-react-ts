import React, { useState, useEffect } from 'react';
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import request from '@/utils/request';
import '@/mock/user.js';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const App: React.FC = () => {
  const [listData, setData] = useState([]);
  const pageSize = 10;

  const fetch = (page: number) => {
    request({
      method: 'get',
      url: '/list',
      data: {
        page,
        pageSize,
      },
    }).then((res) => {
      const data = res.data.data.list || [];
      setData(data || []);
    });
  };

  useEffect(() => {
    fetch(1);
  }, []);

  return (
    <div>
      <Table
        pagination={{ pageSize }}
        columns={columns}
        dataSource={listData}
      />
    </div>
  );
};

export default App;
