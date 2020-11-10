const { gql } = require('apollo-server');
const typeDefs = gql`
    type Example {
      _id: String
      text: String
    }

    type User {
      _id: String
      avatarUri: String
      name: String
      username: String
    }

    type Status {
      _id: String
      userId: String
      status: String
      publishedAt: String
      parentStatusId: String
      user: User
    }

    type Query {
      example: Example
      feed: [Status]
    }
  `;

module.exports = typeDefs;