const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = '4000';

const corsOptions = {
  origin: true,
  credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/assets', express.static('/assets'));

const routes = require('./routes/routes');
routes.assignRoutes(app);

app.listen(port, () => {
  console.log('Escuchando por el puerto ' + port);
});
