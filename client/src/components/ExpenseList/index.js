import React from 'react';

const ExpenseList = ({ expenses = [] }) => {
  if (!expenses.length) {
    return <h3>No Expenses Yet</h3>
  }

  return (
    <div>
      <>
        <h3 className="">Expenses</h3>
        <div className="">
          {expenses &&
            expenses.map((expense) => (
              <div key={expense._id} className="">
                <h5 className="">{expense.name}</h5>
                <ul>
                  <li>{expense.price}</li>
                </ul>
              </div>
            ))}
        </div>
      </>
    </div>
  );
};

export default ExpenseList;
