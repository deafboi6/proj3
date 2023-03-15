import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_EXPENSE } from '../../utils/mutations';

import Auth from '../../utils/auth';

const ExpenseForm = () => {
  const [expenseAmount, setExpenseAmount] = useState('');
  
  const [addExpense, { error }] = useMutation(ADD_EXPENSE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addExpense({
        variables: {
          //******SUBJECT TO CHANGE*******/
          userId,
          expenseAmount,
        },
      });

      setExpenseAmount('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    //************TODO**********/
    const { name } = event.target;

    if (name === 'expenseAmount') {
      setExpenseAmount({ ...expenseAmount })
    }
  };

  return (
    <div>
      <h4>Add new expense:</h4>

      {Auth.loggedIn() ? (
        <>
          <form
            className=""
            onSubmit={handleFormSubmit}
          >
            <div className="">
              <textarea
                name="expenseAmount"
                placeholder="Expense amount..."
                value={expenseAmount}
                className=""
                // style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="">
              <button className="" type="submit">
                Add Expense
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  )
}

export default ExpenseForm;
