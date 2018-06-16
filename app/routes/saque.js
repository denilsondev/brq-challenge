module.exports = function (app) {
  const api = app.api.saque;

  app.route('/v1/saque')
    .post(api.sacar);

    
}

