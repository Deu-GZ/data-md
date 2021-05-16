const path = require('path');
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
	"mode": "production",

	"entry": {
        "data-md": "./src/index.js",
        "data-md.min": "./src/index.js"
    },

	"output": {
        filename: "[name].js",
        library: "data-md",
        libraryExport: "default", // 不添加的话引用的时候需要 tools.default
        libraryTarget: "umd", // var this window ...
    },
    "optimization": {
        minimize: true,
        minimizer: [
            new TerserPlugin({ // 使用压缩插件
                include: /\.min\.js$/
            })
        ]
    },

	// 配置webpack-dev-serve devServer
	devServer:{
		// 配置静态文件目录
		contentBase: path.join(__dirname, 'www'),
		
		// 是否压缩 compress
		compress: false,
		
		// 配置webpack serve 的端口号
		port: 8099,
		
		// 虚拟一个打包路径，供开发测试
		//此时 我们的目标文件并没有真正生成
		
		publicPath: '/xuni/'
	}
}