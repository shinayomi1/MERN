const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Apply middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Create Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware, // Apply authentication middleware to context
});

// Apply Apollo Server middleware to Express app
server.applyMiddleware({ app });

// Define routes (optional, depending on your application structure)
// app.use(routes);

// Connect to MongoDB
db.once('open', () => {
  // Start Express server
  app.listen(PORT, () =>
    console.log(`🌍 Server listening at http://localhost:${PORT}`)
  );
});
