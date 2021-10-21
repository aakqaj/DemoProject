module.exports = {

  publicPath: "./",
  // 构建时的输出目录

  outputDir: "dist",

  // 放置静态资源的目录

  assetsDir: "static",

  transpileDependencies: [ /* string or regex */],

  // 是否为生产环境构建生成 source map?

  productionSourceMap: false,

  devServer: {

    // open: true,

    // host: 'localhost',

    // port: 8080,

    https: true,

    //以上的ip和端口是我们本机的;下面为需要跨域的

    proxy: { //配置跨域

      '/ks': {

        target: 'http://search.kuwo.cn', //这里后台的地址模拟的;应该填写你们真实的后台接口

        ws: true,

        changOrigin: true, //允许跨域

        pathRewrite: {

          '^/ks': '' //请求的时候使用这个api就可以

        }
      },

      //   '/kp': {
      //
      //     target: 'http://antiserver.kuwo.cn', //这里后台的地址模拟的;应该填写你们真实的后台接口
      //
      //     ws: true,
      //
      //     changOrigin: true, //允许跨域
      //
      //     pathRewrite: {
      //
      //       '^/kp': '' //请求的时候使用这个api就可以
      //
      //     }
      //
      //   }
      //
      // }

      '/api': {

        target: 'https://www.baidu.com/', //这里后台的地址模拟的;应该填写你们真实的后台接口

        ws: true,

        changOrigin: true, //允许跨域

        pathRewrite: {

          '^/api': '' //请求的时候使用这个api就可以

        }
      },

      '/biliapi': {
        target: 'http://localhost:3000/',
        ws: true,
        changOrigin: true,
        secure: false,
        timeout: 10000,
        pathRewrite: {

          '^/biliapi': '' //请求的时候使用这个api就可以

        }
      }

    }

  },

}
