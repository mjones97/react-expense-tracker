import React, { useState } from 'react'

const ExpenseForm = ({ onAddExpense, currentExpense, onUpdateExpense }) => {
    const [text, setText] = useState(currentExpense ? currentExpense.text : '');
    const [amount, setAmount] = useState(currentExpense ? currentExpense.amount : '');
    const [category, setCategory] = useState(currentExpense ? currentExpense.category : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentExpense) {
            onUpdateExpense({ ...currentExpense, text, amount, category });
        } else {
            onAddExpense({ text, amount, category })
        }
        setText('');
        setAmount('');
        setCategory('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Expense'
            />
            <input
                type='number'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder='Amount'
                required
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Utilities">Utilities</option>
                <option value="Others">Others</option>
            </select>
            <button className='add-btn' type='submit'>{currentExpense ? 'Update' : 'Add'} Expense</button>
        </form>
    )
}

export default ExpenseForm