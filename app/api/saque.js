const api = {};

api.sacar = (req, res) => {

  let valor = req.body.value;
  let cedula100 = {
    valor: 100,
    img: '../../assets/cedula100.jpg',
    quantity: 0
  };
  let cedula50 = {
    valor: 50,
    img: '../../assets/cedula50.png',
    quantity: 0
  };
  let cedula20 = {
    valor: 20,
    img: '../../assets/cedula20.jpg',
    quantity: 0
  };
  let cedula10 = {
    valor: 10,
    img: '../../assets/cedula10.png',
    quantity: 0
  }

  cedulas = []

  while (valor >= 100) {
    cedula100.quantity = cedula100.quantity + 1;
    valor = valor - 100;
  }

  while (valor >= 50) {
    cedula50.quantity = cedula50.quantity + 1;
    valor = valor - 50;
  }

  while (valor >= 20) {
    cedula20.quantity = cedula20.quantity + 1;
    valor = valor - 20;
  }

  while (valor >= 10) {
    cedula10.quantity = cedula10.quantity + 1;
    valor = valor - 10;
  }

  if (cedula100.quantity) cedulas.push(cedula100);
  if (cedula50.quantity) cedulas.push(cedula50);
  if (cedula20.quantity) cedulas.push(cedula20);
  if (cedula10.quantity) cedulas.push(cedula10);

  if (valor != 0) {
    const err = new Error('Nao há notas disponiveis para realizar este saque.')
    throw err
  }

  res.json(cedulas)

}

module.exports = api;