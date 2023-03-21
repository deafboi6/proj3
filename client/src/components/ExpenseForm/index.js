import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_EXPENSE } from '../../utils/mutations';

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

  const handlePriceChange = (event) => {
    const { name } = event.target;

    if (name === 'expensePrice') {
      setPrice({ ...name.value });
    }
  };

  const handleNameChange = (event) => {
    const { name } = event.target;

    if (name === 'expenseName') {
      setName({ ...name.value });
    }
  };

  return (
    <div>
      <h4>Add new expense:</h4>
        <>
          <form
            className=""
            onSubmit={handleFormSubmit}
          >
            <select id="price" name="expenseName" onChange={handleNameChange}>
              <option value="housing">Housing</option>
              <option value="groceries">Groceries</option>
              <option value="insurance">Insurance</option>
              <option value="car-payment">Car payment</option>
              <option value="utilities">Utilities</option>
              <option value="savings">Savings</option>
              <option value="other">Other</option>
            </select>
            <div className="">
              <input
                type="number"
                name="expensePrice"
                placeholder="Expense price..."
                // value={price}
                className=""
                onChange={handlePriceChange}
              ></input>
            </div>

            <div className="">
              <button className="" type="submit">
                Add Expense
              </button>
            </div>
          </form>
        </>
    </div>
  );
};

export default ExpenseForm;
