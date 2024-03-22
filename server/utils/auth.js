const jwt = require('jsonwebtoken');

// Set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // Function for our authenticated routes
  authMiddleware: function ({ req }) {
    // Extract token from GraphQL context
    let token = req.headers.authorization || '';

    // Check if token exists
    if (!token) {
      throw new Error('You have no token!');
    }

    try {
      // Verify token and get user data out of it
      const { data } = jwt.verify(token, secret);
      req.user = data;
    } catch (err) {
      console.log('Invalid token:', err);
      throw new Error('Invalid token!');
    }
  },

  // Function to sign JWT token
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
 
