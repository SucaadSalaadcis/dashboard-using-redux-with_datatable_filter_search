const jwt = require('jsonwebtoken');

// verify user
const verifyUser = async (req, res, next) => {
    try {
     
      const  token  = req.cookies.access_token; // req.cookies.tokenName
      // console.log(token);
  
      if (!token) {
        return res.json({ status: false, message: 'no token provided ' })
      }
      const deocded = await jwt.verify(token, process.env.KEY);
      next();
    } catch (error) {
      return res.json(error);
    }
  }

  module.exports = verifyUser;