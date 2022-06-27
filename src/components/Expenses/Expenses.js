import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const addExpensesFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return filteredYear === expense.date.getFullYear().toString();
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={addExpensesFilterHandler}
        />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
