import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_INCOME } from "../../utils/mutations";
import "./income.css";
const IncomeForm = () => {
  const [formState, setFormState] = useState({
    amount: '',
    month: 'select'
  });

  const [addIncome, { error }] = useMutation(ADD_INCOME);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = addIncome({
        variables: { ...formState },
      });
      console.log(formState);
    } catch (err) {
      console.error(err);
    }

    setFormState({
      amount: '',
      month: 'select'
    })
  };

  const handleSelect = (event) => {
    console.log(event.target.value);

    setFormState({
      ...formState,
      month: event.target.value
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  }
  return (
    <div>
      <h4>Add new income:</h4>
        <>
          <form
            className=""
            onSubmit={handleFormSubmit}
          >
            <div className="">
              <select id="month" name="month" value={formState.month} onChange={handleSelect}>
                <option disabled selected value="select">Choose month...</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
              {/* <input name='month' placeholder='month' onChange={handleChange}/> */}
              <input
                type="number"
                name="amount"
                placeholder="Income amount..."
                value={formState.amount}
                className=""
                onChange={handleChange}
              />
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
