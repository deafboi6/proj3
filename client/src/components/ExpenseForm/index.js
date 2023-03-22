import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_EXPENSE } from '../../utils/mutations';

const ExpenseForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    price: ''
  });
  
  const [addExpense, { error }] = useMutation(ADD_EXPENSE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = addExpense({
        variables: { ...formState }
      });
      console.log(formState);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    })
  };

  return (
    <div>
      <h4>Add new expense:</h4>
        <>
          <form
            className=""
            onSubmit={handleFormSubmit}
          >
            {/* <select id="expenseCategory" name="name" onChange={handleChange}>
              <option value="housing">Housing</option>
              <option value="groceries">Groceries</option>
              <option value="insurance">Insurance</option>
              <option value="car-payment">Car payment</option>
              <option value="utilities">Utilities</option>
              <option value="savings">Savings</option>
              <option value="other">Other</option>
            </select> */}
            <input name='name' placeholder='Expense Category' onChange={handleChange}/>
            <div className="">
              <input
                name="price"
                placeholder="Expense price..."
                // value={name}
                className=""
                // style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              />
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
