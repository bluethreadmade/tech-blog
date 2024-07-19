const path = require('path');
const express = require('express');
// Import express-session
const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: true,
};

app.use(session(sess));

// initialize expres--handlebars
const hbs = exphbs.create({ defaultLayout: 'main' });
// use the specified layout file
app.engine('handlebars', hbs.engine);
//app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// set views and layouts directory
app.set('views', './views');
// set layout file
app.set('layout', 'layouts/main');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
