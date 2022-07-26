import { useState } from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');

  const buttonClickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  } 

  return (
    <>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={buttonClickHandler}>Change Title</button>
      </Card>
    </>
  );
}

export default ExpenseItem;