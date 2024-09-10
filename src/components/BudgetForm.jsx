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
        <form onSubmit={handleBudgetSubmit} className="w-100 mb-4">
            <h4>Set Your Budget</h4>
            <input
                type="number"
                id="budgetInput"
                placeholder="Enter your budget"
                value={budgetInput}
                onChange={handleBudgetChange}
            />
            <button type="submit" className="mt-2">
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