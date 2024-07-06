// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'http://api.example.com', // 将请求代理到的目标服务器的URL
//       changeOrigin: true, // 修改请求头中的 host 为目标URL的host
//     })
//   );
// };
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app:any) {
  app.use(
    '/carApplyRecord',
    createProxyMiddleware({
      target: '172.20.10.2', // 将请求代理到的目标服务���的URL
    //   pathRewrite: {
    //     '^/carApplyRecord': '', // 将请求路径中的 '/api' 替换为空字符串，即去掉 '/api'
    //   },
      changeOrigin: true, // 修改请求头中的 host 为目标URL的host
    })
  );
};