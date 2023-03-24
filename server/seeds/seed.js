const db = require("../config/connection");
const { Expense, Income, User } = require("../models");

const ExpenseData = require("./expenseData.json");
const IncomeData = require("./incomeData.json");
const UserData = require("./userData.json");

db.once("open", async () => {
  await Expense.deleteMany({});
  await Income.deleteMany({});
  await User.deleteMany({});

  const expenses = await Expense.insertMany(ExpenseData);
  const income = await Income.insertMany(IncomeData);
  const user = await User.insertMany(UserData);
  console.log("Data seeded!");

  process.exit(0);
});
