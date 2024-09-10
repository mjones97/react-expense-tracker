import React from 'react'
import CardComponent from './CardComponent'

const ExpensesCard = ({ totalExpenses }) => {
    return (
        <CardComponent title='Expenses' amount={totalExpenses} />
    )
}

export default ExpensesCard