const express = require('express');
const port = 3000;
const app = express();
const routes = require('./routs/routes');

app.set('view engine', 'ejs');

app.use('/', routes);


app.use(express.static('public'));

app.listen(port, () => {
    console.log("Server Start...");
})