const { Income, Expense, User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    Income: async () => {
      return Income.find({});
    },
    Expense: async () => {
      return Expense.find({});
    },
    User: async () => {
      return User.find();
    },
  },

  Mutation: {
    createExpense: async (parent, args) => {
      const expense = await Expense.create(args);
      return expense;
    },
    createIncome: async (parent, args) => {
      const income = await Income.create(args);
      return income;
    },

    addUser: async (parent, args) => {
      const user = User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateExpense: async (parent, { expenseId, name, price }) => {
      console.log(expenseId);
      return Expense.findByIdAndUpdate(expenseId, { name: name, price: price });
    },
    removeExpense: async (parent, { expenseId }) => {
      return Expense.findOneAndDelete({ _id: expenseId });
    },
  },
};

module.exports = resolvers;
