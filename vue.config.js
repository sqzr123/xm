// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
const path = require("path");

module.exports = {
  devServer: {
    host: "0.0.0.0",
    port: "8080",
    // https:false,
    open: true,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {
      //配置跨域
      "/api": {
        target: "http://member.45fa.com/",
        changeOrigin: true, //允许跨域
        pathRewrite: {
          "^/api": "", //重定向
        },
      },
    },
  },
  lintOnSave: false,
  chainWebpack: (config) => {
    // svg图标加载
    config.module
      .rule("svg")
      .exclude.add(path.join(__dirname, "src/assets/icons/svg"))
      .end();

    config.module
      .rule("icons") // 定义一个名叫 icons 的规则
      .test(/\.svg$/) // 设置 icons 的匹配正则
      .include.add(path.join(__dirname, "src/assets/icons/svg")) // 设置当前规则的作用目录，只在当前目录下才执行当前规则
      .end()
      .use("svg-sprite") // 指定一个名叫 svg-sprite 的 loader 配置
      .loader("svg-sprite-loader") // 该配置使用 svg-sprite-loader 作为处理 loader
      .options({
        // 该 svg-sprite-loader 的配置
        symbolId: "icon-[name]",
      })
      .end();
  },
};
