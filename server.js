const http = require('http');
const express = require('express')
const app = require('./config/express');

app.use(express.static(__dirname + '/public/dist'));

app.get('*',function (req, res) {

  res.sendFile(__dirname + '/public/dist/index.html');

});

http.createServer(app)
  .listen(3000, () => console.log('server iniciado e aplicaçao rodando na porta 3000'))

  module.exports = app