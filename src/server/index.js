const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const houseApi = require("./api/houseApi");

app.use('/api/house', houseApi);

// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');