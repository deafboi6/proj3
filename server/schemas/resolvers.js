const { Income, Expense, User } = require("../models");

const resolvers = {
  Query: {
    income: async () => {
      return Income.find({});
    },
    expense: async () => {
      return Expense.find({});
    },
    user: async () => {
      return User.find();
    },
  },

  Mutation: {
    createExpense: async (parent, args) => {
      const expense = await Expense.create(args);
      return expense;
    },
    createIncome: async (parent, args) => {
      const Income = await Income.create(args);
      return Income;
    },

    addUser: async (parent, { email }) => {
      return User.create({ email });
    },
    updateExpense: async (parent, { expenseId }) => {
      return Expense.findOneAndUpdate({ _id: expenseId });
    },
    removeExpense: async (parent, { expenseId }) => {
      return Expense.findOneAndDelete({ _id: expenseId });
    },
  },
};

module.exports = resolvers;
