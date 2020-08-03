const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    configureWebpack:{
        // 路径配置
        resolve: {
            extensions: ['.js', '.vue', '.json','.ts'],
            // 别名配置
            alias: {
                // @ is an alias to /src
                '@': resolve('src'),
            }
        },
    },
    chainWebpack(config) {
        // it can improve the speed of the first screen, it is recommended to turn on preload
        // it can improve the speed of the first screen, it is recommended to turn on preload
        config.plugin('preload').tap(() => [
            {
                rel: 'preload',
                // to ignore runtime.js
                // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
                fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
                include: 'initial'
            }
        ])

        // when there are many pages, it will cause too many meaningless requests
        config.plugins.delete('prefetch')

        // set svg-sprite-loader


        config
            .when(process.env.NODE_ENV !== 'development',
                config => {
                    config
                        .plugin('ScriptExtHtmlWebpackPlugin')
                        .after('html')
                        .use('script-ext-html-webpack-plugin', [{
                            // `runtime` must same as runtimeChunk name. default is `runtime`
                            inline: /runtime\..*\.js$/
                        }])
                        .end()
                    config
                        .optimization.splitChunks({
                        chunks: 'all',
                        cacheGroups: {
                            libs: {
                                name: 'chunk-libs',
                                test: /[\\/]node_modules[\\/]/,
                                priority: 10,
                                chunks: 'initial' // only package third parties that are initially dependent
                            },
                            elementUI: {
                                name: 'chunk-elementUI', // split elementUI into a single package
                                priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                            },
                            commons: {
                                name: 'chunk-commons',
                                test: resolve('src/components'), // can customize your rules
                                minChunks: 3, //  minimum common number
                                priority: 5,
                                reuseExistingChunk: true
                            }
                        }
                    })
                    // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
                    config.optimization.runtimeChunk('single')
                }
            )
    }
}
