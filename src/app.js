const express = require('express')
const session = require('express-session');
const passport = require('passport');
const routes = require('./routes/index.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
require('./db/index')
require('./auth/index')

app.set("views", path.join(__dirname, 'views', 'ejs'));
app.set('view engine', 'ejs');
app.use(session({
    secret: "desafio",
    rolling: true,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 10000
    }
}))
app.use(cors("*"));
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

app.use(routes)
app.listen(8080, () =>{
    console.log('Servidor escuchando en el 8080');
});