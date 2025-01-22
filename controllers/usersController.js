const User = require('../models/user')

/** 
 * Error handling middleware wrapper for `usersController`
 */
const asyncHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next)
  }
}
