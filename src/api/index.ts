import axios from 'axios';

const request = axios.create({
  baseURL: 'https://api.example.com', // 替换为你的API基础URL
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
    // 其他自定义头部
  },
});

// 请求拦截器
request.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    // 例如添加token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  response => {
    // 对响应数据做些什么
    return response;
  },
  error => {
    // 对响应错误做些什么
    if (error.response) {
      // 服务器返回的错误响应
      console.error('Error response:', error.response);
    } else if (error.request) {
      // 请求已发出，但没有收到响应
      console.error('Error request:', error.request);
    } else {
      // 其他错误
      console.error('Error message:', error.message);
    }
    return Promise.reject(error);
  }
);

export default request;