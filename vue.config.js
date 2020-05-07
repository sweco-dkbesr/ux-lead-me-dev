module.exports = {
    // publicPath: '/ux-lead.me',
    runtimeCompiler: true,
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.transformAssetUrls = {
                    img: 'src',
                    image: 'xlink:href',
                    'b-navbar-text': 'style',
                    'b-img': 'src',
                    'b-button': ['href', 'variant', 'name'],
                    'b-img-lazy': ['src', 'blank-src'],
                    'b-card': 'img-src',
                    'b-card-img': 'src',
                    'b-card-img-lazy': ['src', 'blank-src'],
                    'b-carousel-slide': 'img-src',
                    'b-embed': 'src'
                }

                return options
            })
    }
}
