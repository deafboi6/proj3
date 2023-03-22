const typeDefs = `#graphql
  type Income {
    _id: ID
    amount: String!
    month: String

  }

  type Expense {
    _id: ID
    name: String!
    price: String!
  }

  type User {
    _id: ID
    email: String!
    password: String!
    expenses: [Expense]
    income: [Income]
  }

  type Auth {
    token: ID
    user: User
  }
  
  type Query {
    Income: [Income]
    Expense: [Expense]
    User: User
  }

  type Mutation {
    addExpense(name: String!, price: String!): Expense
    addIncome(amount: String!, month: String!): Income
    addUser(email: String!, password: String!): Auth
    updateExpense(expenseId: ID!, name: String!, price: Int!): Expense
    removeExpense(expenseId: ID!): Expense
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
