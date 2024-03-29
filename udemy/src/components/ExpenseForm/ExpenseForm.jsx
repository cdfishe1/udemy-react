import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = event => {
        setTitle(event.target.value);
        console.log(event.target.value);
    }

    const amountChangeHandler = event => {
        setAmount(event.target.value);
        console.log(event.target.value);
    }

    const dateChangeHandler = event => {
        setDate(event.target.value);
        console.log(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }

        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label htmlFor="title">Title</label>
                        <input id='title' type="text" value={title} onChange={titleChangeHandler} placeholder="expense" />
                    </div>

                    <div className='new-expense__control'>
                        <label htmlFor="amount">Amount</label>
                        <input id='amount' type="number" min='0.01' step='0.01' value={amount} onChange={amountChangeHandler} placeholder="1.00" />
                    </div>

                    <div className='new-expense__control'>
                        <label htmlFor="date">Date</label>
                        <input id='date' type="date" min='2019-01-01' max='2022-12-31' value={date} onChange={dateChangeHandler} />
                    </div>

                    <div className='new-expense__actions'>
                        <button type="button" onClick={props.onCancel}>Cancel</button>
                        <button type='submit'>Add Expense</button>
                    </div>
                </div>  
            </form>
        </>
    )
}

export default ExpenseForm;