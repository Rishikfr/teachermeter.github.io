const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL;

const connectDB = () => {
  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('DB connected successfully');
  })
  .catch((error) => {
    console.log('DB CONNECTION FAILED');
    console.log(error.message);
    process.exit(1);
  });
};

module.exports = connectDB;
