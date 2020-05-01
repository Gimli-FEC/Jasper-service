const express = require('express');
const app = express();
const port = 3002;
const bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.get('/', (req, res) => {

})

app.listen(port, () => console.log(`listening on port ${port}!!!!!!!!!!!`));