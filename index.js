const express = require('express');
const app = express();

const { mongoose } = require('./config/db');
const { routes } = require('./config/routes');
 

app.use(express.json());

app.use('/', routes);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}      

app.listen(port, () => {
    console.log('listening on port', port);
});

