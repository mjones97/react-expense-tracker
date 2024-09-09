import React from 'react'

const ExpenseItem = ({ expense, onEdit, onDelete }) => {
    return (
        <li>
            <span>{expense.text}</span>
            <span>{expense.amount}</span>
            <span>{expense.category}</span>
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </li>
    )
}

export default ExpenseItem