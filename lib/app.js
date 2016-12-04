const express = require('express');
const app = express();
const morgan = require('morgan');
const errorHandler = require('./error-handler');
const userRoute = require('./routes/users');
const plantRoute = require('./routes/plants')
const plantDayRoute = require('./routes/plant-days');
const ensureAuth = require('./auth/ensure-auth')();

app.use(morgan('dev'));


app.use('/users', userRoute);
app.use('/plants', ensureAuth, plantRoute);
app.use('/plant-days', plantDayRoute);


app.use(express.static('./'));

app.get('*', (req, res) => {
    res.sendFile('index.html', {root: '.'});
});

app.use(errorHandler);

module.exports = app;
