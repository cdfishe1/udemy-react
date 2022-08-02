import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import { v4 as uuid } from 'uuid';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const unique_id = uuid().slice(0,8);
    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: unique_id
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditHandler = () => {
        setIsEditing(false)
    }

    return (
        <>
            <div className='new-expense'>
                {!isEditing && (
                    <button onClick={startEditingHandler}>Add New Expense</button>)}

                {isEditing && (
                    <ExpenseForm 
                        onCancel={stopEditHandler} 
                        onSaveExpenseData={saveExpenseDataHandler} 
                    />)}
            </div>
         </>   
    )
}

export default NewExpense;