import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_EXPENSE } from '../../utils/mutations';

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
                name="name"
                placeholder="Expense price..."
                // value={name}
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
    </div>
  );
};
  );
};

export default ExpenseForm;
