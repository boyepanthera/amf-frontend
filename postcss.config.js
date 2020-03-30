// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({
    // Specify the paths to all of the template files in your project 
    content: [
        './src/**/*.js',
        './src/*.js',
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'), ...[purgecss]
    ]
}