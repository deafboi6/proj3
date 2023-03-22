import React from 'react';
import { useQuery } from "@apollo/client";
import { QUERY_INCOMES } from "../../utils/queries";

const IncomeList = () => {
  const { loading, data, error } = useQuery(QUERY_INCOMES);
  console.log(data);
  
  if (loading) {
    return <p>Loading... {loading}</p>;
  }
  if (error) {
    return <p>Error! ${error}</p>;
  }

  return (
    <div className="">
      <div>
        {data?.User?.income?.map((income) => {
          console.log("this is the expense", income);
          return (
            <div key={income.id}>
              <h4>{income.month}</h4>
              <ul>
                <li>${income.amount}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IncomeList;
