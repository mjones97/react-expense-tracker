import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Sidebar from '../components/Sidebar'
import BudgetCard from '../components/BudgetCard'
import ExpensesCard from '../components/ExpensesCard'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseList from '../components/ExpenseList'
import ExpenseChart from '../components/ExpenseChart'
import BudgetForm from '../components/BudgetForm'

const Home = () => {
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
        <div className='d-flex'>
            <Sidebar />
            <div className="content flex-grow-1">
                <Container fluid>
                    <Row className='mt-4 justify-content-center'>
                        <Col lg={10}>
                            <h3>Remaining Budget: ${remainingBudget.toFixed(2)}</h3>
                        </Col>
                    </Row>
                    <Row className='mt-2 justify-content-center'>
                        <Col xs={12} md={6} lg={5} className='mb-4'>
                            <BudgetCard budget={budget} />
                        </Col>
                        <Col xs={12} md={6} lg={5} className='mb-4'>
                            <ExpensesCard totalExpenses={totalExpenses} />
                        </Col>
                    </Row>
                    <Row className='mt-4 justify-content-center'>
                        <Col xs={12} md={8} lg={5}>
                            <BudgetForm budget={budget} setBudget={setBudget} />
                        </Col>
                        <Col xs={12} md={8} lg={5}>
                            <ExpenseForm onAddExpense={addExpense} currentExpense={currentExpense} onUpdateExpense={updateExpense} />
                        </Col>
                    </Row>
                    <Row className='mt-5 justify-content-center gap-5'>
                        <Col xs={12} md={8} lg={5}>
                            <h3>Transaction History</h3>
                            {showExpense && (
                                <ExpenseList
                                    expenses={expenses}
                                    onEditExpense={setCurrentExpense}
                                    onDeleteExpense={deleteExpense}
                                />
                            )}
                        </Col>
                        <Col className='d-flex justify-content-end' xs={12} md={8} lg={5}>
                            <ExpenseChart expenses={expenses} />    
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Home