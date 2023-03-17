import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_INCOME } from '../../utils/mutations';

import Auth from '../../utils/auth';

const IncomeForm = () => {
  const [amount, setAmount] = useState('');
  const [Month, setMonth] = useState('');
  
  const [addIncome, { error }] = useMutation(ADD_INCOME);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addIncome({
        variables: {
          //******SUBJECT TO CHANGE*******/
          amount,
          Month,
        },
      });

      setAmount('');
      setMonth('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name } = event.target;

    if (name === 'incomeAmount') {
      setAmount({ ...amount });
      setMonth({ ...Month });
    }
  };

  return (
    <div>
      <h4>Add new income:</h4>

      {Auth.loggedIn() ? (
        <>
          <form
            className=""
            onSubmit={handleFormSubmit}
          >
            <div className="">
              <select id="Month" name="Month">
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
              <textarea
                name="amount"
                placeholder="Income amount..."
                value={amount}
                className=""
                // style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="">
              <button className="" type="submit">
                Add Income
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to add income. Please{' '}
          {/* <Link to="/login">login</Link> or <Link to="/signup">signup.</Link> */}
        </p>
      )}
    </div>
  );
};

export default IncomeForm;