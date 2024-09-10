import React from 'react'
import CardComponent from './CardComponent'

const BudgetCard = ({ budget }) => {
    return (
        <CardComponent title='Budget' amount={budget} />
    )
}

export default BudgetCard