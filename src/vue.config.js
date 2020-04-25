modult.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxyTable:{
            '/api':{
                target:'http://www.tmooc.cn',
                changeOrigin:true, //是否要将主机头的原点设置为url地址
                pathRewrite:{
                    '^/api':' '
                }
            }
        }
    }
}