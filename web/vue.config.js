module.exports = {
    filenameHashing: false,
    css: {
        extract: {
            filename: 'DNNSearchAndReplace-bundle.min.css'
        },
        sourceMap: true,
    },
    configureWebpack: (config) => {
        config.externals = { 'jquery': 'jQuery' }
        config.output.filename = 'DNNSearchAndReplace-bundle.min.js'
        config.optimization = {
            splitChunks: false
        }
    }
}
