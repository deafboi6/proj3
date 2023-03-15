const { Schema, model } = require("mongoose");

const incomeSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  Date: {
    type: Date,
    required: true,
  },
});

const Income = model("Income", incomeSchema);

module.exports = Income;
