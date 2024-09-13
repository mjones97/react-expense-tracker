import React from 'react'
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, onEditExpense, onDeleteExpense}) => {
    return (
        <div className='mt-4'>
            <ul className='expenses-list'>
                {expenses.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        expense={expense}
                        onEdit={() => onEditExpense(expense)}
                        onDelete={() => onDeleteExpense(expense.id)}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ExpenseList