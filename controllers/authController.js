const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const asyncHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

exports.getLoginPage = (req, res) => {
  res.render('login');
};

exports.getSignupPage = (req, res) => {
  res.render('signup');
};

exports.getVerifyEmailPage = (req, res) => {
  res.render('verifyEmail');
};

exports.signup = asyncHandler(async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).send('Passwords do not match');
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).send('Email already in use');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const verificationToken = crypto.randomBytes(32).toString('hex');

  const user = new User({
    email,
    password: hashedPassword,
    verificationToken,
    isVerified: false
  });

  await user.save();

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: 'Email Verification',
    text: `Please verify your email by clicking the following link: ${process.env.BASE_URL}/auth/verify-email/${verificationToken}`
  };

  await transporter.sendMail(mailOptions);

  res.redirect('/auth/verify-email');
});

exports.verifyEmail = asyncHandler(async (req, res) => {
  const { token } = req.params;

  const user = await User.findOne({ verificationToken: token });
  if (!user) {
    return res.status(400).send('Invalid token');
  }

  user.isVerified = true;
  user.verificationToken = undefined;
  await user.save();

  res.redirect('/auth/login');
});
