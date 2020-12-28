const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('port', process.env.PORT || 4000);

app.use(require('./routes/employees.routes'));


module.exports = app;