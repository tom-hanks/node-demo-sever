var express = require('express');
var app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');
/* 引入cors */
const cors = require('cors');
app.use(cors());
//设置跨域访问 
app.all('*', function(req, res, next) {
    // console.log('req===',req)
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});



app.use('/jzg',createProxyMiddleware({
    // target:'https://mp.weixin.qq.com/mp/videoplayer?action=get_mp_video_play_url&preview=0&__biz=&mid=&idx=&vid=wxv_1530858218581770240&uin=&key=&pass_ticket=&wxtoken=&appmsg_token=&x5=0&f=json',//代理到哪里去
    target:'https://mp.weixin.qq.com/mp/videoplayer',//代理到哪里去
    changeOrigin:true,//如果设置为true,那么本地会虚拟一个服务端接收你的请求并代你发送该请求，这样就不会有跨域问题了
    onProxyReq(proxyReq, req, res) {
        // proxyReq.setHeader('cookie', 'SERVER_TOKEN=153b8baf-4b2d');
        // proxyReq.setHeader('path','/mp/videoplayer?action=get_mp_video_play_url&preview=0&__biz=MzA5MzI0MjgzNw==&mid=2651957417&idx=1&vid=wxv_1530858218581770240&uin=&key=&pass_ticket=&wxtoken=777&devicetype=Windows10x64&enterid=1601183934&appmsg_token=&x5=0&f=json')
        // proxyReq.setHeader('authority','mp.weixin.qq.com')
        // proxyReq.setHeader('Access-Control-Allow-Origin','http://mp.weixin.qq.com')
        // proxyReq.setHeader('scheme','https')
        // console.log('proxyReq===',proxyReq)
        console.log('%%%%%%%%%%%%%===')
        console.log('%%%%%%%%%%%%%===')
        console.log('%%%%%%%%%%%%%===')
        console.log('%%%%%%%%%%%%%===')
        console.log('%%%%%%%%%%%%%===')
        console.log('%%%%%%%%%%%%%===')
      }

}))
app.use('/haha',createProxyMiddleware({
    target:'https://wap.9dcj.com/index/listHomeVideo',//代理到哪里去
    changeOrigin:true,//如果设置为true,那么本地会虚拟一个服务端接收你的请求并代你发送该请求，这样就不会有跨域问题了
}))
app.get('/xixi', function(req,res){
    console.log('rrrrrrrrrr===',req.headers)
    // console.log('res%%%%%===',res)
    res.status(200),
        res.json({
            data:{
                list:'csw'
            }
        })

});




//同样效果
var questions = [];


function createRandomItem(id) {
    var heroes = ['张三', '李四', '王五', '赵六', '钱七', '路人甲', '路人乙', 'bruse Lee'];
    return {
        id: id,
        name: heroes[Math.floor(Math.random() * 7)],
        age: Math.floor(Math.random() * 1000),
        saved: Math.floor(Math.random() * 10000)
    };

}

for (var i = 0; i < 2; i++) {
    questions.push(createRandomItem(i));
}

//写个接口123
app.get('/123', function(req, res) {
    res.status(200),
        res.json({
            data:{
                list:questions
            }
        })
});

//配置服务端口
var server = app.listen(3000, function() {

    var host = server.address().address;

    var port = server.address().port;
    // console.log('server==',server)
    console.log('Example app listening at http://10.5.50.32', host, port);
})