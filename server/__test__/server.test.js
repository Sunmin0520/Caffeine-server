require('dotenv').config();

'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;

chai.use(chaiHttp);

const app = require('../app');

const { users, notes } = require('../models');

const usersFixture = require('./fixtures/users.json');
const notesFixture = require('./fixtures/notes.json');

describe('Bare Minimum Requirements - user', () => {
  beforeEach(async () => {
    await users.destroy({ where: {}, truncate: true });
    await users.create(usersFixture[0]);
  })

describe('should be opended server', () => {
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
})

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
          expect(res.body).to.equal('email already exists');
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
          expect(res.body).to.equal('unvalid user');
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




//notes//
describe('Bare Minimum Requirements - notes', () => {
  beforeEach(async () => {
    // Setup/TearDown : Check Fixtures folder
    await notes.destroy({ where: {}, truncate: { cascase: true } });
    await notes.create(notesFixture[0]);
  })

  describe('GET /notes', () => {
    it('should respond with notes list', done => {
      chai
        .request(app)
        .get('/notes')
        .end((err, res) => {
          if(err){
            done(err);
            return;
          }

          if(res.body.length){
            expect(res).to.have.status(200);
            res.body.forEach((data_val, index) => {
              expect(data_val).has.all.keys([
                'id','name','user_id'
              ])
            });
          } 
          done();
        })
    })
  })

  describe('POST /notes', () => {
    it('should respond note info to add note', done => {
      chai
        .request(app)
        .post('/notes')
        .set({ "Authorization": `Bearer ${process.env.TEST_TOKEN}` })
        .send({
          name: 'finca',
          mall:'monmouth'
        })
        .end((err, res) => {
          if (err) {
            done(err);
            return;
          }
          expect(res).to.have.status(201);
          done();
        });
    });
  })

  describe('PUT /notes', () => {
    it('should respond note info to modify note', done => {
      chai
      .request(app)
      .put('/notes/148')
      .set({ "Authorization": `Bearer ${process.env.TEST_TOKEN}`})
      .send({
        user_id:'11',
        name:'espresso special',
        mall:'tapcoffee'
      })
      .end((err, res) => {
        if(err) {
          done(err);
          return;
        }
        expect(res).to.have.status(200);
        expect(res.body.result).to.equal('note modified');
        done();
      })
    })
  })

  describe('DELETE /notes', () => {
    it('should delete note info', done => {
      chai
      .request(app)
      .delete('/notes/141')
      .set({ "Authorization": `Bearer ${process.env.TEST_TOKEN}`})
      .send({
        name:'espresso special',
        mall:'tapcoffee'
      })
      .end((err, res) => {
        if(err) {
          done(err);
          return;
        }
        expect(res).to.have.status(200);
        expect(res.body.result).to.equal('note deleted');
        done();
      })
    })
  })
})