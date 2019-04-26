const jwt = require('jsonwebtoken');

const SECRET = 'LIW3OFF19';

module.exports = function(req, res, next) {
    try {
      const authHeader = req.headers.authorization;
  
      if (!authHeader)
        return res.status(401).json({
          status: 'error',
          message: 'Please specify an authorization header',
        });
  
      const token = authHeader.split(' ')[1];
  
      const tokenData = jwt.verify(token, SECRET);
  
      req.employee = tokenData.id;
  
      next();
    } catch (err) {
      return res.status(401).json({
        status: 'error',
        message: 'You are not authorized!',
      });
    }
  };
