import React from 'react'

const BudgetSummary = ({ totalExpenses, budget }) => {
    return (
        <div>
            <h2>Budget Summary</h2>
            <p>Total Expenses: ${totalExpenses}</p>
            <p>Budget: ${budget}</p>
            <p>Remaining: ${budget - totalExpenses}</p>
        </div>
    )
}

export default BudgetSummary