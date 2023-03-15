const db = require("../config/connection");
const { Expense, Income } = require("../models");

const ExpenseData = require("./expenseData.json");
const IncomeData = require("./incomeData.json");

db.once("open", async () => {
  await Expense.deleteMany({});
  await Income.deleteMany({});

  const expenses = await Expense.insertMany(ExpenseData);
  const income = await Income.insertMany(IncomeData);
  console.log("Expenses seeded!");

  process.exit(0);
});
