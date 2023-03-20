const typeDefs = `#graphql
  type Income {
    _id: ID
    amount: Int!
    month: String

  }

  type Expense {
    _id: ID
    name: String!
    price: Int!
  }

  type User {
    _id: ID
    email: String!
  }

  type Query {
    Income: [Income]
    Expense: [Expense]
    User: [User]
  }

  type Mutation {
    createExpense(name: String!, price: Int!): Expense
    createIncome(amount: Int!, month: String!): Income
    addUser(email: String!): User
    updateExpense(expenseId: ID!, name: String!, price: Int!): Expense
    removeExpense(expenseId: ID!): Expense
  }
`;

module.exports = typeDefs;
