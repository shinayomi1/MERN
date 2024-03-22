const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID!
    title: String!
    author: String!
    description: String!
    image: String!
    link: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]!
  }

  input BookInput {
    title: String!
    author: String!
    description: String!
    image: String!
    link: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
  }
`;



module.exports =  typeDefs