const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

let apiRoutes = require("./routes/routes")
app.use('/api', apiRoutes);

const port = process.env.PORT || 5000;
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));