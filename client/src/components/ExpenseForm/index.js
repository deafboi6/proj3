import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import "./expenseF.css";
import 'bootstrap/dist/css/bootstrap.css';

import { ADD_EXPENSE } from '../../utils/mutations';

const ExpenseForm = () => {
  const [formState, setFormState] = useState({
    name: 'select',
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

    setFormState({
      name: 'select',
      price: ''
    });
    window.location.reload();
  };

  const handleSelect = (event) => {
    console.log(event.target.value);

    setFormState({
      ...formState,
      name: event.target.value
    });
  };

  const handleChange = (event) => {
    console.log(event.target);
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
            
            <select id="expenseCategory" name="name" value={formState.name} onChange={handleSelect} style={{marginLeft: "12%"}}>
              <option disabled selected value="select">Choose category...</option>
              <option value="Housing">Housing</option>
              <option value="Groceries">Groceries</option>
              <option value="Insurance">Insurance</option>
              <option value="Car-payment">Car payment</option>
              <option value="Utilities">Utilities</option>
              <option value="Savings">Savings</option>
              <option value="Other">Other</option>
            </select>
            {/* <input name='name' placeholder='Expense Category' onChange={handleChange}/> */}
              <input
                name="price"
                placeholder="Expense price..."
                value={formState.price}
                className=""
                // style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              />

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
