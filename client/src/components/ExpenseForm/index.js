import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_EXPENSE } from '../../utils/mutations';

import Auth from '../../utils/auth';

const ExpenseForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  
  const [addExpense, { error }] = useMutation(ADD_EXPENSE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addExpense({
        variables: {
          //******SUBJECT TO CHANGE*******/
          price,
          name,
        },
      });

      setName('');
      setPrice('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name } = event.target;

    if (name === 'name') {
      setName({ ...name });
      setPrice({ ...price });
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
            <select id="price" name="price">
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
                name="name"
                placeholder="Expense price..."
                value={name}
                name="name"
                placeholder="Expense price..."
                value={name}
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
          {/* <Link to="/login">login</Link> or <Link to="/signup">signup.</Link> */}
        </p>
      )}
    </div>
  );
};

export default ExpenseForm;
