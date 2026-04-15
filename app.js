require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./database/database');

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));

app.listen(PORT, () => {
  console.log(`Server is running at Port ${PORT}`);
});
