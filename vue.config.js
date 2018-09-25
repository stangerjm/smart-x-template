const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
        analyzerMode: "static",
        reportFilename: "../report/report.html"
      })
    ]
  },
  chainWebpack: config => {
    //use vue compiler
    config.resolve.alias.set("vue$", "vue/dist/vue.esm.js");
  }
};
