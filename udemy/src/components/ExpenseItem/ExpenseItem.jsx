import './ExpenseItem.css'
import ExpenseDate from '../ExpenseDate/ExpenseDate';

function ExpenseItem(props) {
    
    return (
        <>
            <section className='expense-item' aria-label='Expense Item'>
                <ExpenseDate date={props.date}/>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>

            </section>
        </>
    )
}

export default ExpenseItem;