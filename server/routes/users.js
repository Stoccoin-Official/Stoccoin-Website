const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();

const User = require('../models/user');
const { tokenExtractor, userExtractor } = require('../utils/middleware');

// Create a user (Register)
usersRouter.post('/', async (req, res) => {
  const { firstName, lastName, username, email, password, confirmPassword } =
    req.body;

  const error = {};

  if (!firstName) {
    error.firstName = 'First name is required.';
  }

  if (!lastName) {
    error.lastName = 'Last name is required.';
  }

  if (!username) {
    error.username = 'Username is required.';
  } else {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      error.username = 'Username already exists.';
    }
  }

  if (!email) {
    error.email = 'Email is required.';
  } else {
    const emailExists = await User.findOne({ email });

    if (emailExists) {
      error.email = 'Email already exists.';
    } else {
      // Email validation
      const emailRegex = /\S+@\S+\.\S+/;
      const validEmail = emailRegex.test(email);

      if (!validEmail) {
        error.email = 'Email is invalid.';
      }
    }
  }

  if (!password) {
    error.password = 'Password is required.';
  } else if (password.toLowerCase().includes('password')) {
    error.password = "Password can't contain 'password'";
  } else if (password.length < 7) {
    error.password =
      'Password is too short, it must contain at least 7 characters.';
  }

  if (!confirmPassword) {
    error.confirmPassword = 'Password confirmation is required.';
  } else if (password !== confirmPassword) {
    error.password = 'Passwords do not match.';
    error.confirmPassword = 'Passwords do not match.';
  }

  if (Object.keys(error).length > 0) {
    return res.status(400).json(error);
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    firstName,
    lastName,
    username,
    email,
    passwordHash,
  });

  const savedUser = await user.save();

  res.status(201).json(savedUser);
});

// Get profile
usersRouter.get('/', tokenExtractor, userExtractor, async (req, res) => {
  res.status(200).json(req.user);
});

// Update profile

usersRouter.patch('/', tokenExtractor, userExtractor, async (req, res) => {
  // Check if the update fields exist
  const updates = Object.keys(req.body);
  const allowedUpdates = ['firstName', 'lastName', 'username', 'email'];

  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  const { firstName, lastName, email, username } = req.body;

  const error = {};

  if (firstName === '') {
    error.firstName = 'First name is required.';
  }

  if (lastName === '') {
    error.lastName = 'Last name is required.';
  }

  // Email validation message
  if (email && email !== req.user.email) {
    if (email === '') {
      error.email = 'Email address is required.';
    } else if (/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email)) {
      const emailExists = await User.findOne({ email });

      if (emailExists) {
        error.email = 'Email address already exists.';
      }
    } else {
      error.email = 'Invalid email address.';
    }
  }

  // Username validation message
  if (username && username !== req.user.username) {
    if (username === '') {
      error.username = 'Username is required.';
    } else {
      const usernameExists = await User.findOne({ username: username });

      if (usernameExists) {
        error.username = 'Username already exists.';
      }
    }
  }

  if (Object.keys(error).length > 0) {
    return res.status(400).json(error);
  }

  updates.forEach((update) => (req.user[update] = req.body[update]));

  await req.user.save();
  res.send(req.user);
});

module.exports = usersRouter;
