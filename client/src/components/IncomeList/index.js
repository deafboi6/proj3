import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const IncomeList = ({ incomes = [] }) => {
  if (!incomes.length) {
    return <h3>No Expenses Yet</h3>
  }

  return (
    <div>
      {Auth.loggedIn() ? (
      <>
        <h3 className="">Income</h3>
        <div className="">
          {incomes &&
            incomes.map((income) => (
              <div key={income._id} className="">
                <h5 className="">{income.month}</h5>
                <ul>
                  <li>{income.amount}</li>
                </ul>
              </div>
            ))}
        </div>
      </>
      ) : (
          <p>
            You need to be logged in to view your income. Please{' '}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </p>
      )}
    </div>
  );
};

export default IncomeList;
