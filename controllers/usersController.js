import User from '../models/user.js';

/**
 * Error handling middleware wrapper for `usersController`
 */
const asyncHandler = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
