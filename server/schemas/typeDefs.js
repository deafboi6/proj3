const typeDefs = `#graphql
  type Income {
    amount: Number
    month: String

  }

  type Expense {
    name: String
    price: Number
  }

  type User {
    name: String
  }

  type Query {
    Income: [Income]
    Expense: [Expense]
    User: [User]
  }

  type Mutation {
    createExpense(name: String!, price: String!): Expense
    createIncome(amount: String!, month: String!): Income
    addUser(email: String!): User
    updateExpense(expenseId: ID!): Expense
    removeExpense(expenseId: ID!): Expense
  }
`;

module.exports = typeDefs;
