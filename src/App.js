import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BudgetCard from './components/BudgetCard'
import ExpensesCard from './components/ExpensesCard'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import ExpenseChart from './components/ExpenseChart'
import BudgetForm from './components/BudgetForm'

function App() {
  const [expenses, setExpenses] = useState([]);
  const [showExpense, setShowExpense] = useState(false);
  const [currentExpense, setCurrentExpense] = useState(null);
  const [budget, setBudget] = useState(0);

  const addExpense = (expense) => {
      setExpenses([...expenses, {...expense, id: Date.now() }]);
      setShowExpense(true);
  };

  const updateExpense = (updatedExpense) => {
      setExpenses(expenses.map(expense =>
      expense.id === updatedExpense.id ? updatedExpense : expense
      ));
      setCurrentExpense(null);
  };

  const deleteExpense = (id) => {
      setExpenses(expenses.filter(expense => expense.id !== id));
      setShowExpense(expenses.length > 1);
  };

  const totalExpenses = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);

  const remainingBudget = budget - totalExpenses;

  return (
    <Container fluid className='container'>
      <Row className='custom-card justify-content-center mt-3 mb-5'>
        <Col xs={12} md={6} lg={6} className='mb-4'>
          <BudgetForm budget={budget} setBudget={setBudget} />
        </Col>

        <Col xs={12} md={6} lg={6} className='mb-4'>
          <ExpenseForm onAddExpense={addExpense} currentExpense={currentExpense} onUpdateExpense={updateExpense} />
        </Col>
      </Row>

      <Row className='justify-content-center mt-2'>
        <Col xs={12} md={6} lg={6} className='mb-4'>
          <BudgetCard budget={budget} />
          <Row className='mt-3'>
              <Col lg={10}>
                <h5><u>Remaining Budget: ${remainingBudget.toFixed(2)}</u></h5>
              </Col>
          </Row>
        </Col>

        <Col xs={12} md={6} lg={6} className='mb-4'>
            <ExpensesCard totalExpenses={totalExpenses} />
        </Col>
      </Row>
      
      <Row className='justify-content-center mt-5'>
        <Col xs={12} md={8} lg={6}>
          <h3>Transaction History</h3>
          <div className="underline"></div>
          {showExpense && (
            <ExpenseList
              expenses={expenses}
              onEditExpense={setCurrentExpense}
              onDeleteExpense={deleteExpense}
            />
          )}
        </Col>

        <Col className='d-flex justify-content-center' xs={12} md={8} lg={6}>
          <ExpenseChart expenses={expenses} />    
        </Col>
      </Row>
    </Container>
  );
}

export default App;