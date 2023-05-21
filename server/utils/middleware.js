const User = require('../models/user');

const jwt = require('jsonwebtoken');

const errorHandler = (err, req, res, next) => {
  console.log(err.message);

  if (err.name === 'CastError') {
    return res.status(400).send({ error: 'Malformatted ID.' });
  } else if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  } else if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      error: { token: 'Invalid token.' },
    });
  } else if (err.name === 'TokenExpiredError') {
    return res.status(401).json({
      error: { token: 'Token expired.' },
    });
  }

  next(err);
};

const tokenExtractor = (req, res, next) => {
  const authorization = req.get('authorization');

  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    req.token = authorization.substring(7);
  } else {
    req.token = null;
  }

  next();
};

const userExtractor = async (req, res, next) => {
  const decodedToken = jwt.verify(req.token, process.env.JWT_SECRET_KEY);

  if (!req.token || !decodedToken.id) {
    req.user = null;
    return res
      .status(401)
      .json({ error: { token: 'Token missing or invalid' } });
  }

  req.user = await User.findById(decodedToken.id);

  next();
};

module.exports = {
  errorHandler,
  tokenExtractor,
  userExtractor,
};
