/**
 @author zengwei
 @time 2018/12/9
 **/
var path = require('path');
var http = require('http');
var express = require('express');
var fs = require("fs");
var exphbs  = require('express-handlebars');
var app = express();
app.use('/static', express.static('static'));//静态文件托管
app.engine('handlebars', exphbs());//npm 安装的mustache没有提供模板引擎，不注册模板引擎会报错Error: Module "mustache" does not provide a view engine.
//app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('views', path.join(__dirname, '/templates'));
app.set('view engine', 'handlebars');

app.get('/', function(req, response) {
    let data = {
        title: '首页111212',
        name: 'zengwei',
        age: 28,
        hasList: true,
        list: [
            {name: '大熊', age: 30, list: ['a', 'b']} ,
            {name: '静香', age: 30, list: ['c', 'd']} ,
            {name: '胖虎', age: 30, list: ['e', 'f']} ,
        ],
    }
    response.render('index', data);//把读取的数据填充进模板
});

app.get('/show/:ids', function(req, response) {
    // console.log(req.path)
    // console.log(req.params)
    // console.log(req.query)
    // console.log(req.body)
    let data = {
        title: '详情页',
        name: 'zengwei',
        age: 28,
        hasList: true,
        list: [
            {name: '大熊', age: 30, list: ['a', 'b']} ,
            {name: '静香', age: 30, list: ['c', 'd']} ,
            {name: '胖虎', age: 30, list: ['e', 'f']} ,
        ],
        req
    }
    response.render('showDetails', data);//把读取的数据填充进模板

});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://localhost:' + port);
});
