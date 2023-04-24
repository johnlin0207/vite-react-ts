import React, { useState, useEffect } from 'react';
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import request from '@/utils/request';
import { applyVueInReact, applyPureVueInReact } from 'veaury';
import BasicVueComponent from './Basic';
// Use HOC 'applyVueInReact'
const BasicWithNormal = applyVueInReact(BasicVueComponent);
// Use HOC 'applyPureVueInReact'
const BasicWithPure = applyPureVueInReact(BasicVueComponent);

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

const App = () => {
  const [listData, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const pageSize = 10;

  const fetch = (page: number) => {
    request({
      method: 'get',
      url: '/list',
      params: {
        page,
        pageSize,
      },
    }).then((res) => {
      const data = res?.data?.list || [];
      const num = res?.data?.total || 0;
      setData(data);
      setTotal(num);
    });
  };

  useEffect(() => {
    fetch(1);
  }, []);
  const [foo] = useState('Hello!');

  return (
    <>
      <BasicWithNormal foo={foo}>
        <div>the default slot</div>
      </BasicWithNormal>
      <BasicWithPure foo={foo}>
        <div>the default slot</div>
      </BasicWithPure>
    </>
  );
};

export default App;
