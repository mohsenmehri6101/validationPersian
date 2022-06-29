// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/app.js', 'dist').setPublicPath('dist');
// mix.sass('src/app.scss', 'dist');
mix.sass('src/app.scss', 'dist',[]);
// mix.css('src/app.css', 'dist');

/*
mix.options({
    hmrOptions: {
        host: 'localhost',
        port: '8000'
    },
});

mix.webpackConfig({
    devServer: {
        port: '8000'
    },
});
*/