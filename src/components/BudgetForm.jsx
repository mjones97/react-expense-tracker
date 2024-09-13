import React, { useState } from 'react'
import PropTypes from 'prop-types';

const BudgetForm = ({ budget, setBudget }) => {
    const [budgetInput, setBudgetInput] = useState('');

    const handleBudgetChange = (e) => {
        setBudgetInput(e.target.value);
    };
    
    const handleBudgetSubmit = (e) => {
        e.preventDefault();
        setBudget(parseFloat(budgetInput) || 0);
        setBudgetInput('');
    };

    return (
        <form onSubmit={handleBudgetSubmit} className='d-flex flex-column'>
            <h4 className='mb-4'><u>Set Your Budget</u></h4>
            <input
                type="number"
                id="budgetInput"
                placeholder="Enter your budget"
                value={budgetInput}
                onChange={handleBudgetChange}
            />
            <button type="submit" className="w-25 mt-2">
                Set Budget
            </button>
        </form>
    )
}

BudgetForm.propTypes = {
    budget: PropTypes.number.isRequired,
    setBudget: PropTypes.func.isRequired,
};

export default BudgetForm