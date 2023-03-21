import React from 'react';
<<<<<<< Updated upstream
=======
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
      ) : (
          <p>
            You need to be logged in to view your expenses. Please{' '}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </p>
      )}
>>>>>>> Stashed changes
    </div>
  );
};

export default ExpenseList;
