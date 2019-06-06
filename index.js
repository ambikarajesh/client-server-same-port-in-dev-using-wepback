const express = require('express');

const app = express();
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('/server', (req, res)=>{
    res.send('server page')
})
app.listen(4000, ()=>{
    console.log('server start at 4000');
})