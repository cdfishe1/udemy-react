import './NewExpense.css';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import { v4 as uuid } from 'uuid';

const NewExpense = () => {
    const unique_id = uuid().slice(0,8);
    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: unique_id
        }
        console.log(expenseData)
    }

    return (
        <>
            <div className='new-expense'>
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> 
            </div>
         </>   
    )
}

export default NewExpense;