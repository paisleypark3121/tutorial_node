const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');

const app = express();
app.use(bodyParser.json());

app.listen(3000,() => {
    console.log('listening');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'./index.html'));
});
