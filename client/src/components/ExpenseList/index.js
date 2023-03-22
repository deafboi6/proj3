import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_EXPENSES } from "../../utils/queries";
//import "./expense.css";

const ExpenseList = () => {
  const { loading, data, error } = useQuery(QUERY_EXPENSES);
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
        {data?.User?.expenses?.map((expenses) => {
          console.log("this is the expense", expenses);
          return (
            <div key={expenses.id}>
              <h4>{expenses.name}</h4>
              <ul>
                <li id="expense">${expenses.price}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpenseList;
