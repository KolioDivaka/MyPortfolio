const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router/router'); 

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200
}

app.use(cors());



const port = 4000
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});