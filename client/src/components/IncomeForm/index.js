import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_INCOME } from '../../utils/mutations';

const IncomeForm = () => {
  const [incomeAmount, setIncomeAmount] = useState('');
  
  const [addIncome, { error }] = useMutation(ADD_INCOME);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addIncome({
        variables: {
          //******SUBJECT TO CHANGE*******/
          userId,
          incomeAmount,
        },
      });

      setIncomeAmount('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name } = event.target;

    if (name === 'incomeAmount') {
      setIncomeAmount({ ...incomeAmount });
    }
  };

  return (
    <div>
      <h4>Add new income:</h4>
        <>
          <form
            className=""
            onSubmit={handleFormSubmit}
          >
            <div className="">
              <input type="text" id="incomeDate" name="incomeDate"/>
              <textarea
                name="incomeAmount"
                placeholder="Income amount..."
                value={incomeAmount}
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
<<<<<<< Updated upstream
=======
      ) : (
        <p>
          You need to be logged in to add income. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
>>>>>>> Stashed changes
    </div>
  );
};

export default IncomeForm;