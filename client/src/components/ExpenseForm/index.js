import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_EXPENSE } from '../../utils/mutations';

import Auth from '../../utils/auth';

const ExpenseForm = () => {
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('');
  
  const [addExpense, { error }] = useMutation(ADD_EXPENSE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addExpense({
        variables: {
          //******SUBJECT TO CHANGE*******/
          userId,
          expenseCategory,
          expenseAmount,
        },
      });

      setExpenseAmount('');
      setExpenseCategory('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name } = event.target;

    if (name === 'expenseAmount') {
      setExpenseAmount({ ...expenseAmount });
      setExpenseCategory({ ...expenseCategory });
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
            <select id="expenseCategory" name="expenseCategory">
              <option value="housing">Housing</option>
              <option value="groceries">Groceries</option>
              <option value="insurance">Insurance</option>
              <option value="car-payment">Car payment</option>
              <option value="utilities">Utilities</option>
              <option value="savings">Savings</option>
              <option value="other">Other</option>
            </select>
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
          You need to be logged in to add an expense. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ExpenseForm;
