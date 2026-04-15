require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./database/database');

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/teachers', require('./routes/teachers'));

app.listen(PORT, () => {
  console.log(`Server is running at Port ${PORT}`);
});
