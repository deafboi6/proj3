import React from 'react';

const IncomeList = ({ incomes = [] }) => {
  if (!incomes.length) {
    return <h3>No Expenses Yet</h3>
  }

  return (
    <div>
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
<<<<<<< Updated upstream
=======
      ) : (
          <p>
            You need to be logged in to view your income. Please{' '}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </p>
      )}
>>>>>>> Stashed changes
    </div>
  );
};

export default IncomeList;
