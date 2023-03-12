const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const contactRoute = require('./route/contactRoute');
app.use(express.json());
app.use(cors());
app.use('/contact', contactRoute);
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(process.env.PORT);
  console.log(`Server listening on port ${port}`);
});
