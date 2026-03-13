const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  date: String
});

const incomeSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  date: String
});

const Expense = mongoose.model("Expense", expenseSchema);
const Income = mongoose.model("Income", incomeSchema);

module.exports = { Expense, Income };