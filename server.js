const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    host = process.env.MONGO_HOST || 'localhost',
    mongoose = require('mongoose'),
    Person = require('./api/models/personModel'),
    bodyParser = require('body-parser');

const mongoHost='mongodb://' + host + '/testApi';
mongoose.Promise = global.Promise;
mongoose.connect(mongoHost);


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let routes = require('./api/routes/personRoutes');

routes(app);

app.listen(port);

console.log('RESTful API server started on port ' + port);