import Mock from 'mockjs';
const Random = Mock.Random;

//get请求
Mock.mock('/user', 'get', (options) => {
  const ret = Mock.mock({
    user: { username: '@cname' },
  });
  return {
    status: 200,
    data: ret,
  };
});

//get请求：模拟分页数据
Mock.mock('/list', 'get', (options) => {
  //接受参数：是JSON格式，需要转换成对象
  const page = JSON.parse(options.body).page;
  const pageSize = JSON.parse(options.body).pageSize;
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
  });

  if (page > 3) {
    return {
      status: 200,
      data: [],
    };
  }
  return {
    status: 200,
    data: ret,
  };
});

//post请求，模拟注册
Mock.mock('/add', 'post', (options) => {
  return {
    status: 200,
    data: JSON.parse(options.body).data,
  };
});
