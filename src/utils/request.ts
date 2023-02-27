import axios from 'axios';
// import { useMsgbox, Message } from 'element3'
import { getToken } from '@/utils/auth';

const service = axios.create({
  baseURL: '', // process.env.BASE_API, // url = base url + request url
  timeout: 8000,
});

service.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['X-Token'] = getToken();
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 20000) {
      console.log('接口信息报错', res.message);
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return res;
    }
  },
  (error) => {
    console.log('接口信息报错' + error);
    return Promise.reject(error);
  }
);

export default service;
