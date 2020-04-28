// 项目的配置文件
module.exports = {
    devServer: {
        proxy: {
            '/mhd': {
                target: 'https://mhd.zhuishushenqi.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/mhd': ''
                }
            }
        }
    }
}