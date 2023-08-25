const autoprefixer = require('autoprefixer')
const sortMediaQueries = require('postcss-sort-media-queries')

module.exports = {
    plugins: [
        sortMediaQueries({
            sort: 'mobile-first',
        }),
        autoprefixer({
            Browserslist: {
                config: ['ie >= 8', 'last 4 version'],
            },
        }),
    ],
    sourceMap: true,
}
