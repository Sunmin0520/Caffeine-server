const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const usersRouter = require('./routes/users');
const notesRouter = require('./routes/notes');
const cafesRouter = require('./routes/cafes');

const app = express();
const port = 3001;

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Caffeine API',
      description: 'Caffeine API Information',
      contact: {
        email: 'sunmincho5@gmail.com'
      },
      servers: ['http://localhost:3001']
    }
  },
  apis:['./routes/index.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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