const express = require("express");
const { Expense, Income } = require("./models");

const app = express();
app.use(express.json());

app.post("/api/expenses", async (req, res) => {
  const expense = new Expense(req.body);
  await expense.save();
  res.status(201).json(expense);
});

app.get("/api/expenses", async (req, res) => {
  const data = await Expense.find();
  res.json(data);
});

app.post("/api/income", async (req, res) => {
  const income = new Income(req.body);
  await income.save();
  res.status(201).json(income);
});

app.get("/api/income", async (req, res) => {
  const data = await Income.find();
  res.json(data);
});

app.get("/api/dashboard", async (req, res) => {
  const incomes = await Income.find();
  const expenses = await Expense.find();

  const totalIncome = incomes.reduce((sum, i) => sum + i.amount, 0);
  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);

  res.json({
    totalIncome,
    totalExpenses,
    balance: totalIncome - totalExpenses
  });
});

module.exports = app;