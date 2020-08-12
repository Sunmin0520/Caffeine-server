require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const usersRouter = require('./routes/users');
const notesRouter = require('./routes/notes');
const cafesRouter = require('./routes/cafes');

const app = express();
const port = 3001;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({
  origin: ['exp://localhost:19000'],
  method: ['GET','POST','PUT','DELETE'],
  credentials: true
}))
app.use(morgan('dev'));


app.get('/', (req,res) => {
  res.send('Hello World');
})

app.use('/users', usersRouter);
app.use('/notes', notesRouter);
app.use('/cafes', cafesRouter);

app.set('port',port);
app.listen(app.get('port'), () => {
  console.log(`app is listening in PORT ${app.get('port')}`);
})

module.exports = app;