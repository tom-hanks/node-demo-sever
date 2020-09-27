```
npm run start
```
##### 插件相关
```
###### node + expre 去启动搭建服务

###### http-proxy-middleware 做代理转发服务
const { createProxyMiddleware } = require('http-proxy-middleware');

###### nodemon 做node修改热更新
package.json里的scripts做了对应的启动处理

```
#### 相关方案

```
本地会有跨域情况，分析问题的原因是因为vue项目里的axios的withCredentials设置成了true导致的
所以要设置res.header("Access-Control-Allow-Credentials", "true");
```
