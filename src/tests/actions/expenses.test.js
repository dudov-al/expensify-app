import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("Should setup removeexpense object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    //for objexts and arrays
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("Should setup object editexpense with updates", () => {
  const result = editExpense("123", { note: "Taken from ID" });
  expect(result).toEqual({
    type: "EDIT_EXPENSE",
    id: "123",
    updates: { note: "Taken from ID" },
  });
});

test("Should setup addexpense object with values", () => {
  const expenseData = {
    description: "Rent",
    amount: 12313,
    createdAt: 1000,
    note: "This was last month rent",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("Should setup addexpense object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String),
    },
  });
});
