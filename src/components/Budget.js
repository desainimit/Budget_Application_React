import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, remaining, currency } = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const upperLimitValue = 20000 // Maximum value for the input field.

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' &&  newBudget <= upperLimitValue) {
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget
            });
        } else if (newBudget > upperLimitValue) {
            alert("The value cannot exceed remaining funds £" + remaining);
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                className='w-50 ms-1'
                required
                type="number"
                id="cost"
                step={10}
                value={newBudget}
                onChange={handleBudgetChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};
export default Budget;