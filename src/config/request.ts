import axios from 'axios';
import Cookies from 'js-cookie';
import { message } from 'ant-design-vue';
// 创建并配置一个新的axios
// process.env.VUE_APP_BASE_API
const service = axios.create({
  baseURL: 'http://im.juhai.xyz/',
  timeout: 60000, // 请求超时时间 毫秒
  // withCredentials: true,   // 异步请求时是否携带cookie
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    token: Cookies.get('token'),
  },
});

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    config.headers['token'] = Cookies.get('token'); //配置请求token
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code == -1 && res.msg === '用户不存在') {
      return res;
    } else if (res.code == -1) {
      message.info(res.msg);
      return Promise.reject(res.msg);
    } else {
      return res;
    }
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default service;
