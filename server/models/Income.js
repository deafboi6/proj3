const { Schema, model } = require("mongoose");

const incomeSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  month: {
    type: String,
    required: true,
    unique: true
  },
});

const Income = model("Income", incomeSchema);

module.exports = Income;
