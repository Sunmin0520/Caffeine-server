'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;

chai.use(chaiHttp);

const app = require('../app');

const { users } = require('../models');
const usersFixture = require('./fixtures/users.json');

describe('Bare Minimum Requirements', () => {
  beforeEach(async () => {
    await users.destroy({ where: {}, truncate: true });
    await users.create(usersFixture[0]);
  });

  describe('GET /', () => {
    it('should respond with Hello World message', done => {
      chai
        .request(app)
        .get('/')
        .end((err, res) => {
          if (err) {
            done(err);
            return;
          }
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Hello World');
          done();
        });
    });
  });

  describe('POST /user/signup', () => {
    it('should respond user info to signup data', done => {
      chai
        .request(app)
        .post('/user/signup')
        .send({
          email: 'test@gmail.com',
          username: 'testuser',
          password: '4321'
        })
        .end((err, res) => {
          if (err) {
            done(err);
            return;
          }
          expect(res).to.have.status(201);
          expect(res.body).has.all.keys([
            'id',
            'email',
            'password',
            'username',
          ]);
          done();
        });
    });

    it('should respond conflict with existing user email', done => {
      chai
        .request(app)
        .post('/user/signup')
        .send({
          email: 'sunmin@gmail.com',
          username: 'sunmin',
          password: '1234'
        })
        .end((err, res) => {
          if (err) {
            done(err);
            return;
          }
          expect(res).to.have.status(409);
          expect(res.text).to.equal('email already exists');
          done();
        });
    });
  });

  describe('POST /user/signin', () => {
    it('should respond user id to signin data', done => {
      chai
        .request(app)
        .post('/user/signin')
        .send({
          email: 'sunmin@gmail.com',
          password: '1234'
        })
        .end((err, res) => {
          expect(res.body).has.all.keys(['id']);
          done();
        });
    });

    it('should respond NOT FOUND with unvalid user', done => {
      chai
        .request(app)
        .post('/user/signin')
        .send({
          email: 'caffeine@gmail.com',
          password: 'caffeine'
        })
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.text).to.equal('unvalid user');
          done();
        });
    });
  });

  describe('POST /user/signout', () => {
    it('should redirect {BASE_URL}/ to signout', done => {
      chai
        .request(app)
        .post('/user/signout')
        .set({ host: 'localhost:3001' })
        .end((err, res) => {
          if (err) {
            done(err);
            return;
          }
          expect(res.redirects[0]).to.not.an('undefined');

          done();
        });
    });
  });
});
