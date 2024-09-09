import { useState } from 'react';
import BudgetSummary from './components/BudgetSummary';
import ExpenseChart from './components/ExpenseChart'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

function App() {
  const [expenses, setExpenses] = useState([]);
  const [showExpense, setShowExpense] = useState(false)
  const [currentExpense, setCurrentExpense] = useState(null)
  const budget = 1000;

  const addExpense = (expense) => {
    setExpenses([...expenses, {...expense, id: Date.now() }]);
    setShowExpense(true);
  };

  const updateExpense = (updatedExpense) => {
    setExpenses(expenses.map(expense =>
      expense.id === updateExpense.id ? updateExpense : expense
    ));
    setCurrentExpense(null);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
    setShowExpense(false);
  };

  const totalExpenses = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);

  return (
    <div>
      <ExpenseForm onAddExpense={addExpense} currentExpense={currentExpense} onUpdateExpense={updateExpense} />
      <div className='budget-chart-summary'>
        <div className='budget-chart'>
          <BudgetSummary totalExpenses={totalExpenses} budget={budget} />
          <ExpenseChart expenses={expenses} />
        </div>
        {showExpense && (
        <ExpenseList
          expenses={expenses}
          onEditExpense={setCurrentExpense}
          onDeleteExpense={deleteExpense}
        />
      )}
      </div>
    </div>
  );
}

export default App;
