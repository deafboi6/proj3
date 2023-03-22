import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_INCOME } from "../../utils/mutations";
const IncomeForm = () => {
  const [formState, setFormState] = useState({
    amount: '',
    month: ''
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
              {/* <select id="month" name="month" onChange={handlemonthChange}>
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
              </select> */}
              <input name='month' placeholder='month' onChange={handleChange}/>
              <input
                type="number"
                name="amount"
                placeholder="Income amount..."
                // value={amount}
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
