import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const titleSplice = props.title.replaceAll(' ', '-');
  return (
    <>
      <Card className='expense-item' aria-labelledby={titleSplice}>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2 id={titleSplice}>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>
    </>
   
  );
}

export default ExpenseItem;