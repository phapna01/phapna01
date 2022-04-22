const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
const { Router } = require('express');



//HTTP logger
app.use(morgan('combined'));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());



app.use(express.static(path.join(__dirname, 'public')));

// Tamplate engine
app.engine('hbs', handlebars.engine({
    extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

//Router init
route(app);


app.listen(port, () => console.log(`Example app listening on port ${port}`)) //start lên webserver với port 30000 port

