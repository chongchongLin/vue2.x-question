
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
    productionSourceMap:false,
    // configureWebpack 值为对象，会通过 webpack-merge 合并到最终的配置
    configureWebpack: {
        entry:  process.env.NODE_ENV === 'production' ? './src/components/modal.vue':'./src/main.js',
        output: {
            publicPath: ASSET_PATH
          },
        externals: {
            // CDN 的 Element 依赖全局变量 Vue， 所以 Vue 也需要使用 CDN 引入
            'vue': 'Vue',
            // 属性名称 element-ui, 表示遇到 import xxx from 'element-ui' 这类引入 'element-ui'的，
            // 不去 node_modules 中找，而是去找 全局变量 ELEMENT
            'element-ui': 'ELEMENT'
        }
    }
}