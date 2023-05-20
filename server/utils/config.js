require('dotenv').config();

const MONGODB_URI =
  (process.env.NODE_ENV === 'test'
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI) || 'mongodb://0.0.0.0:27017/stoccoin';

module.exports = {
  MONGODB_URI,
};
