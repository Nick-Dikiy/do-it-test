const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');

const cors = require('cors');
const morgan = require('morgan');
const corsOptions = {
    origin:  'http://localhost:9000',
    credentials: true
};

app.use(cors(corsOptions));
app.use(morgan('common'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);



const port = 3000;
app.listen(port, () => {
    console.log('We are live on ' + port);
});
