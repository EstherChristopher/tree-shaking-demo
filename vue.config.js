const { defineConfig } = require('@vue/cli-service')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = defineConfig({
  transpileDependencies: true,
      configureWebpack: {
        plugins: [
          new BundleAnalyzerPlugin
        ]
      }
})

// module.exports = define{
//   configureWebpack: {
//     plugins: [new BundleAnalyzerPlugin()]
//   }
// };


// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
