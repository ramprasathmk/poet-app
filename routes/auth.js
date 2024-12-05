const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController');

router.get('/login', authController.getLoginPage);
router.post('/login', passport.authenticate('local', {
  successRedirect: '/poems',
  failureRedirect: '/auth/login'
}));

router.get('/signup', authController.getSignupPage);
router.post('/signup', authController.signup);

router.get('/verify-email', authController.getVerifyEmailPage);
router.get('/verify-email/:token', authController.verifyEmail);

module.exports = router;
