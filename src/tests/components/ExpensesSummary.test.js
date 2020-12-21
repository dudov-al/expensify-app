import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("Should render Summary with one", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={235} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("Should render Summary with many", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={23} expensesTotal={23122325} />
  );
  expect(wrapper).toMatchSnapshot();
});
