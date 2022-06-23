import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <>
            <section className='expense-item' aria-label='Expense Item'>
                <div>Date</div>
                <div className='expense-item__description'>
                    <h2>Title</h2>
                    <div className='expense-item__price'>Amount</div>
                </div>
            </section>
        </>
    )
}

export default ExpenseItem;