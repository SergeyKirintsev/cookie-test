const browser = require('browser-detect');

module.exports = (req, res, next) => {
  req.browser = browser(req.headers['user-agent']);
  next();
};