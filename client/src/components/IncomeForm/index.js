import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_INCOME } from '../../utils/mutations';
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
          userId,
          incomeAmount,
        },
      });
      setAmount('');
      setMonth('');
    } catch (err) {
      console.error(err);
    }
  };
  const handleAmountChange = (event) => {
    const { name } = event.target;
    if (name === 'incomeAmount') {
      setAmount({ ...name.value });
    }
  };
  const handleMonthChange = (event) => {
    const { name } = event.target;
    if (name === 'incomeMonth') {
      setMonth({ ...name.value });
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
              <select id="Month" name="incomeMonth" onChange={handleMonthChange}>
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
              <input
                type="number"
                name="incomeAmount"
                placeholder="Income amount..."
                // value={amount}
                className=""
                onChange={handleAmountChange}
              ></input>
            </div>
            <div className="">
              <button className="" type="submit">
                Add Income
              </button>
            </div>
          </form>
        </>
    </div>
  );
};
export default IncomeForm;