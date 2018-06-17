const http = require('http');
const app = require('./config/express');

http.createServer(app)
  .listen(3000, () => console.log('server iniciado'))

  module.exports = app