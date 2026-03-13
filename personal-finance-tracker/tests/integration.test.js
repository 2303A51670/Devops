const request = require("supertest");
const app = require("../src/app");
const { connectDB, disconnectDB } = require("../src/db");
const { Expense, Income } = require("../src/models");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/pft_test";

beforeAll(async () => {
  await connectDB(MONGO_URI);
});

afterAll(async () => {
  await disconnectDB();
});

beforeEach(async () => {
  await Expense.deleteMany({});
  await Income.deleteMany({});
});

test("Insert and retrieve expense records", async () => {
  const exp = { title: "Groceries", amount: 250, date: "2026-02-01" };

  const createRes = await request(app).post("/api/expenses").send(exp);
  expect(createRes.status).toBe(201);

  const listRes = await request(app).get("/api/expenses");
  expect(listRes.status).toBe(200);
  expect(listRes.body.length).toBe(1);
});

test("Insert and retrieve income records", async () => {
  const inc = { title: "Salary", amount: 1000, date: "2026-02-02" };

  await request(app).post("/api/income").send(inc);

  const listRes = await request(app).get("/api/income");
  expect(listRes.body.length).toBe(1);
});

test("Dashboard aggregation", async () => {
  await request(app).post("/api/income").send({ title: "Salary", amount: 2000, date: "2026-02-03" });
  await request(app).post("/api/expenses").send({ title: "Rent", amount: 1200, date: "2026-02-03" });

  const res = await request(app).get("/api/dashboard");

  expect(res.body.totalIncome).toBe(2000);
  expect(res.body.totalExpenses).toBe(1200);
});