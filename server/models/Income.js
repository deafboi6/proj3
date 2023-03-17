const { Schema, model } = require("mongoose");

const incomeSchema = new Schema({
  amount: {
    type: String,
    required: true,
  },
  Month: {
    type: String,
    required: true,
  },
});

const Income = model("Income", incomeSchema);

module.exports = Income;
