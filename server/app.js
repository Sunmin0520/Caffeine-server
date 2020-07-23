//express를 사용해서 localhost:3001을 열고, 필요한 미들웨어를 추가했습니다.

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const usersRouter = require('./routes/users');
const cafesRouter = require('./routes/cafes')
const notesRouter = require('./routes/notes');

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

//라우팅
app.use('/users', usersRouter);
//app.use('/cafes', cafesRouter);
app.use('/notes', notesRouter);

app.set('port',port);
app.listen(app.get('port'), () => {
  console.log(`app is listening in PORT ${app.get('port')}`);
})

module.exports = app;