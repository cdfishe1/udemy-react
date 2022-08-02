import { useState } from 'react';
import Card from '../Card/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesList from '../ExpensesList/ExpensesList';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <div>
        <Card className="expenses">
          <ExpenseFilter selected={filteredYear} onFilterExpense={filterChangeHandler}/>
          <ExpensesList items={filteredExpenses}/>
        </Card>
      </div>
    </>
  );
}

export default Expenses;