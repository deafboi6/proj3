const { Income, Expense, User } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    Income: async () => {
      return Income.find({});
    },
    Expense: async () => {
      return Expense.find({});
    },
    User: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user.id);
        return user;
      }
      throw new AuthenticationError("Not logged in!");
    },
  },

  Mutation: {
    addExpense: async (parent, args, context) => {
      if (context.user) {
        const userUpdateUser = await User.findByIdAndUpdate(context.user._id, {
          $push: { expenses: { name: args.name, price: args.price } }
        });
        console.log(userUpdateUser);
        return userUpdateUser;
      }
      throw new AuthenticationError("Not logged in");
    },
    addIncome: async (parent, args, context) => {
      if (context.user) {
        const income = new Income({ amount: args.amount, month: args.month });

        await User.findByIdAndUpdate(context.user.id, {
          $push: { income: income }
        });
      }
      throw new AuthenticationError("Not logged in");
    },

    addUser: async (parent, args) => {
      const user = User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

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
