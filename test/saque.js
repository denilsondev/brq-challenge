const chai = require('chai');
const server = require('../server');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('Saque', () => {

  it('Efetuar saque com sucesso.', (done) => {

    let valorSaque = {
      value: 550
    }

    chai.request(server)
      .post('/v1/saque')
      .send(valorSaque)
      .end((err, res) => {

        let result = res.body.reduce((total, item, index) => {
          return total + (item.valor * item.quantity)
        }, 0)
        
        res.should.have.status(200);
        res.body[0].should.all.have.keys('valor', 'img', 'quantity')
        result.should.be.equal(valorSaque.value)

        done();

      })
  })

})