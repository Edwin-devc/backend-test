const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT||5000;
app.use(express.static('public'));
//set the view to EJS engine
app.set('view engine', 'ejs');
app.set('partials', 'views/partials');
app.use(bodyParser.urlencoded({ extended: false}));

const routes = require('./server/routes/user.routes');
app.use('/', routes);

app.listen(port);

