module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:"http://www.imooc.com",
                changeOrigin:true, //是否要将主机头的原点设置为url地址  // 'secure': false, // false为http访问，true为https访问
                ws:false, //如果要代理 websockets，配置这个参数
                pathRewrite:{
                    '/api':''
                }
            }
        }
    }
}