import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';
const Random = Mock.Random;

export default [
  {
    url: '/list',
    method: 'get',
    response: (options: any) => {
      //接受参数：是JSON格式，需要转换成对象
      const page = options.query.page;
      const pageSize = options.query.pageSize;
      const ret = Mock.mock({
        [`list|${pageSize}`]: [
          {
            'id|+1': 1,
            key: '@id',
            name: '@cname',
            'age|1-100': 100,
            address: Random.region(),
          },
        ],
        total: 21,
      });

      return {
        status: 200,
        data: ret,
      };
    },
  },
  {
    url: '/user',
    method: 'get',
    response: () => {
      const ret = Mock.mock({
        user: { username: '@cname' },
      });
      return {
        status: 200,
        data: ret,
      };
    },
  },
] as MockMethod[];
