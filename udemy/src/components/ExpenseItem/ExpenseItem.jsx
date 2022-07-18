import React, { useState } from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');

  const titleSplice = props.title.replaceAll(' ', '-');
 
  const buttonClickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  } 

  return (
    <>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description' aria-labelledby={titleSplice}>
          <h2 id={titleSplice}>{title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={buttonClickHandler}>Change Title</button>
      </Card>
    </>
  );
}

export default ExpenseItem;