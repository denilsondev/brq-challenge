const api = {};

api.sacar = (req, res) => {

  let valor = req.body.value;
  let cedula = {
    v100: 0,
    v50: 0,
    v20: 0,
    v10: 0
  };

  while (valor >= 100) {
    cedula.v100 = cedula.v100 + 1;
    valor = valor - 100;
  }

  while (valor >= 50) {
    cedula.v50 = cedula.v50 + 1;
    valor = valor - 50;
  }

  while (valor >= 20) {
    cedula.v20 = cedula.v20 + 1;
    valor = valor - 20;
  }

  while (valor >= 10) {
    cedula.v10 = cedula.v10 + 1;
    valor = valor - 10;
  }

  if (valor != 0) cedula.error = 'Nao há notas disponiveis para realizar este saque.'

  res.json(cedula)

}

module.exports = api;